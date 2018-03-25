using System.Threading.Tasks;
using EventAsker.API.Model;

namespace EventAsker.API.Repositories
{
    public interface IAuthRepository
    {
         Task<Admin> Register(Admin admin, string password);
         Task<Admin> Login (string username, string password);
         Task<bool> UserExists(string username);
          
    }
}