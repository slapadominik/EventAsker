using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
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
        private IMapper _mapper;
        public AuthController(IAuthService service, IMapper mapper){
            _service = service;
            _mapper = mapper;
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
            AdminViewModel adminViewModel = _mapper.Map<AdminViewModel>(admin);
            return Ok(adminViewModel);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] AdminDto adminDto){
            Admin admin = await _service.LoginAsync(adminDto);
            if (admin == null)
                return Unauthorized();
                
            AdminLoginDto adminLoginDto = _mapper.Map<AdminLoginDto>(admin);
            string tokenString = _service.BuildToken(adminLoginDto);

            return new OkObjectResult(tokenString);
        }
        
    }
}