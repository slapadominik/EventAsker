using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        [Required]
        public string QuestionContent { get; set; }
        public string AuthorName { get; set; }
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }

        public int LecturerId { get; set; }
        public Lecturer Lecturer { get; set; }
    }
}
