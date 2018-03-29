using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class Lecturer
    {
        [Key]
        public int LecturerId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Company { get; set; }

        public ICollection<Lecture> Lectures { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}
