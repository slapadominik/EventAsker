using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Domain.Entity
{
    public class Event
    {
        [Key]
        public int EventId {get; set;}
        [Required]
        public string Name {get; set;}
        [Required]
        public string Street {get; set;} 
        [Required]
        public string Date {get; set;}
        [Required]
        public string Description {get; set;}
        public string AudienceKey {get; set;}
        public string City {get; set;}
        public bool IsActive {get; set;}
        public string ImageFilename {get; set;}
        public ICollection<Lecture> Lectures { get; set; }
        public ICollection<Question> Questions { get; set; }

    }
}