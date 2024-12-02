using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagerApi.Server.Data;
using TaskManagerApi.Server.Models;
using TaskManagerApi.Server.Services;

using BCrypt.Net;

namespace TaskManagerApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly TokenService _tokenService;

        public AuthController(ApplicationDbContext context, TokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == registerDto.Username);
            if (existingUser != null)
            {
                return BadRequest("Username is already taken");
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(registerDto.Password);
            var user = new User
            {
                Username = registerDto.Username,
                PasswordHash = hashedPassword,
                Email = registerDto.Email
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == loginDto.Username);

            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid username or password");
            }

            var token = _tokenService.GenerateToken(user);
            var tasksUrl = Url.Action("GetTasks", "Tasks", null, Request.Scheme);

            return Ok(new { Token = token, RedirectUrl = tasksUrl });
        }



    }
}
