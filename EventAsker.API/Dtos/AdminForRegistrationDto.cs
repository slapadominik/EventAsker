using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Dtos
{
    public class AdminForRegistrationDto
    {
        [Required]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "You must specify a username between 4 to 10 characters")]
        public string Username {get; set;}
        [Required]
        [StringLength(14, MinimumLength = 6, ErrorMessage = "You must specify a password between 6 to 14 characters")]
        public string Password {get; set;}
    }
}