using System;
using System.Security.Cryptography;
using System.Threading.Tasks;
using EventAsker.API.Context;
using EventAsker.API.Model;

namespace EventAsker.API.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private ApplicationDbContext _context;

        public AuthRepository(ApplicationDbContext context){
            _context=context;
        }

        public async Task<Admin> Login(string username, string password)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Admin> Register(Admin admin, string password)
        {
            byte[] passwordHash, passwordSalt;
            GeneratePasswordHashAndSalt(password, out passwordHash, out passwordSalt);

            admin.PasswordHash = passwordHash;
            admin.PasswordSalt = passwordSalt;

            await _context.Admins.AddAsync(admin);
            await _context.SaveChangesAsync();

            return admin;
        }


        public async Task<bool> UserExists(string username)
        {
            throw new System.NotImplementedException();
        }

         private void GeneratePasswordHashAndSalt(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (HMACSHA512 hmac = new HMACSHA512()){
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}