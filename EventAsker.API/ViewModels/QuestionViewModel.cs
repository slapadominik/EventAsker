namespace EventAsker.API.ViewModels
{
    public class QuestionViewModel
    {
        public string QuestionContent { get; set; }
        public string AuthorName { get; set; }
        public string Email { get; set; }
        public LectureViewModel Lecturer { get; set; }
    }
}
