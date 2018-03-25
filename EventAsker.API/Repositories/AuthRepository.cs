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
            throw new System.NotImplementedException();
        }

        public async Task<bool> UserExists(string username)
        {
            throw new System.NotImplementedException();
        }
    }
}