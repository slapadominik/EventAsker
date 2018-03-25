using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private IAuthRepository _repository;
        public AuthController(IAuthRepository repository){
            _repository = repository;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] AdminForRegistrationDto adminToRegister){
            //here will be validation if admin with given username already exists, but need to wait for UserExists implementation
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Admin admin = new Admin(){ Username = adminToRegister.Username };
            await _repository.Register(admin, adminToRegister.Password);
            return Ok();
        }
        
    }
}