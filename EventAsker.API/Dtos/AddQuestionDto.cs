namespace EventAsker.API.Dtos
{
    public class AddQuestionDto
    {
        public string QuestionContent { get; set; }
        public string AuthorName { get; set; }
        public string Email { get; set; }
        public int EventId { get; set; }
        public int? LectureId{ get; set; }

    }
}