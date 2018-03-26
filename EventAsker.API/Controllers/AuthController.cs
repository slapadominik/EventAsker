using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.Repositories;
using EventAsker.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private IAuthService _service;
        public AuthController(IAuthService service){
            _service = service;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] AdminDto adminDto){
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Admin admin = await _service.RegisterAsync(adminDto);
            if (admin == null){
                ModelState.AddModelError("Username", "Username is already taken");
                return BadRequest(ModelState);
            }
            
            return Ok();
        }
        
    }
}