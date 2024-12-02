using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace TaskManagerApi.Server.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string? Email { get; set; }

        // Navigation property
        public ICollection<Task>? Tasks { get; set; }
    }
}
