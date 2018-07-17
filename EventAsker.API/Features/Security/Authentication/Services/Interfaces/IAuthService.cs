using System.Threading.Tasks;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Security.Authentication.DTO;

namespace EventAsker.API.Features.Security.Authentication.Services.Interfaces
{
    public interface IAuthService
    {
         Task<Admin> RegisterAsync(AdminDto adminDto);
         Task<Admin> LoginAsync (AdminDto adminDto);

         string BuildToken(AdminLoginDto adminLoginDto);
         
    }
}