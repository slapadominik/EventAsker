using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class Event
    {
        [Key]
        public int EventId {get; set;}
        [Required]
        public string Name {get; set;}
    }
}