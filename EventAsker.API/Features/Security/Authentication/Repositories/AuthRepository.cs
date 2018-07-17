using System.Security.Cryptography;
using System.Threading.Tasks;
using EventAsker.API.Domain.DataAccess;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Security.Authentication.DTO;
using EventAsker.API.Features.Security.Authentication.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Features.Security.Authentication.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private ApplicationDbContext _context;

        public AuthRepository(ApplicationDbContext context){
            _context=context;
        }

        public async Task<Admin> AddAsync(AdminDto adminDto)
        {
            Admin admin = new Admin(){Username = adminDto.Username};

            byte[] passwordHash, passwordSalt;
            GeneratePasswordHashAndSalt(adminDto.Password, out passwordHash, out passwordSalt);

            admin.PasswordHash = passwordHash;
            admin.PasswordSalt = passwordSalt;

            await _context.Admins.AddAsync(admin);
            await _context.SaveChangesAsync();

            return admin;
        }

        public async Task<Admin> GetAdminAsync(string username)
        {
            return await _context.Admins.FirstOrDefaultAsync(x => x.Username == username);
        }

        public async Task<bool> UserExistsAsync(string username)
        {
            if (await _context.Admins.AnyAsync(x => x.Username ==username)){
                return true;
            }
            return false;
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