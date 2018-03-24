using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Model
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
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }

        public int LecturerId { get; set; }
        public Lecturer Lecturer { get; set; }
    }
}
