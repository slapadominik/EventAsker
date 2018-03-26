using System;
using System.Security.Cryptography;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.Repositories;

namespace EventAsker.API.Services
{
    public class AuthService : IAuthService
    {
        private IAuthRepository _repository;

        public AuthService(IAuthRepository repository){
            this._repository = repository;
        }


        public async Task<Admin> LoginAsync(AdminDto adminDto)
        {
            Admin admin = await _repository.GetAdminAsync(adminDto.Username);
            if (admin == null)
                return null;
            
            if (!VerifyPasswordHash(adminDto.Password, admin.PasswordSalt, admin.PasswordHash))
                return null;
            
            return admin;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            using (HMACSHA512 hmac = new HMACSHA512(passwordSalt)){
                byte[] computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i=0; i<passwordHash.Length;i++){
                    if (passwordHash[i] != computedHash[i]){
                        return false;
                    }
                }
            }
            return true;
        }

        public async Task<Admin> RegisterAsync(AdminDto adminDto)
        {
            if (await _repository.UserExistsAsync(adminDto.Username))
                return null;
            return await _repository.AddAsync(adminDto);           
        }

         
    }
}