using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Domain.Entity
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

        public int? LectureId { get; set; }
        public Lecture Lecture { get; set; }
    }
}
