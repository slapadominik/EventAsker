using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Domain.Entity
{
    public class Lecture
    {
        [Key]
        public int LectureId { get; set; }
        [Required]
        public string Topic { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string StartTime { get; set; }
        [Required]
        public string EndTime { get; set; }
        [Required]
        public string LecturerName {get; set;}
        public int EventId { get; set; }
        public Event Event { get; set; }
        public ICollection<Question> Questions { get; set; }  
    }
}
