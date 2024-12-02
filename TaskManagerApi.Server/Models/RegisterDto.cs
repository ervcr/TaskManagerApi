namespace TaskManagerApi.Server.Models
{
    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string? Email { get; set; } // Added email property
    }
}
