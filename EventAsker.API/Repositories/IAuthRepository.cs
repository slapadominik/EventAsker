using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;

namespace EventAsker.API.Repositories
{
    public interface IAuthRepository
    {
         Task<Admin> AddAsync(AdminDto admin);
         Task<Admin> GetAdminAsync(string username);
         Task<bool> UserExistsAsync(string username);
          
    }
}