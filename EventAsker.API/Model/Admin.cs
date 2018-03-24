using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class Admin
    {
        [Key]
        public int AdminId {get; set;}
        [Required]
        public string Username {get; set;}
        [Required]
        public byte[] PasswordHash {get; set;}
        [Required]
        public byte[] PasswordSalt {get; set;}
    }
}