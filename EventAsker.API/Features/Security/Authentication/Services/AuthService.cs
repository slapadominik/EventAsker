using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Security.Authentication.DTO;
using EventAsker.API.Features.Security.Authentication.Repositories.Interfaces;
using EventAsker.API.Features.Security.Authentication.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace EventAsker.API.Features.Security.Authentication.Services
{
    public class AuthService : IAuthService
    {
        private IAuthRepository _repository;
        private IConfiguration _config; 
        
        public AuthService(IAuthRepository repository, IConfiguration config){
            this._repository = repository;
            _config = config;
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

        public string BuildToken(AdminLoginDto adminLoginDto)
        {
            Claim[] claims = new Claim[] {
                new Claim(ClaimTypes.NameIdentifier, adminLoginDto.AdminId.ToString()),
                new Claim(ClaimTypes.Name, adminLoginDto.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}