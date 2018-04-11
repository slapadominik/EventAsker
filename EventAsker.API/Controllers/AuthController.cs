using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.Repositories;
using EventAsker.API.Services;
using EventAsker.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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
            AdminViewModel adminViewModel = new AdminViewModel(){AdminUsername = admin.Username};
            return Ok(adminViewModel);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AdminDto adminDto){
            Admin admin = await _service.LoginAsync(adminDto);
            if (admin == null)
                return Unauthorized();
                
            AdminLoginDto adminLoginDto = new AdminLoginDto(){
                AdminId = admin.AdminId,
                Username = admin.Username
            };

            string tokenString = _service.BuildToken(adminLoginDto);

            return new OkObjectResult(tokenString);
        }
        
    }
}