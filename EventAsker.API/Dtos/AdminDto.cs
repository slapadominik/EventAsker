using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Dtos
{
    public class AdminDto
    {
        [Required]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "Username must contain between 4 and 10 characters")]
        public string Username {get; set;}
        [Required]
        [StringLength(14, MinimumLength = 6, ErrorMessage = "Password must contain between 6 and 14 characters")]
        public string Password {get; set;}
    }
}