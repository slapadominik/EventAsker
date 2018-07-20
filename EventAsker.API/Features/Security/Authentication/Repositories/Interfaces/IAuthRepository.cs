using System.Threading.Tasks;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Security.Authentication.DTO;

namespace EventAsker.API.Features.Security.Authentication.Repositories.Interfaces
{
    public interface IAuthRepository
    {
         Task<Admin> AddAsync(AdminDto admin);
         Task<Admin> GetAdminAsync(string username);
         Task<bool> UserExistsAsync(string username);
          
    }
}