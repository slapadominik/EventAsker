using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;

namespace EventAsker.API.Services
{
    public interface IAuthService
    {
         Task<Admin> RegisterAsync(AdminDto adminDto);
         Task<Admin> LoginAsync (AdminDto adminDto);

         string BuildToken(AdminLoginDto adminLoginDto);
         
    }
}