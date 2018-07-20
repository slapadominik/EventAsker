using EventAsker.API.Features.Lecture.ViewModels;

namespace EventAsker.API.Features.Question.ViewModels
{
    public class QuestionViewModel
    {
        public int QuestionId{get; set;}
        public string QuestionContent { get; set; }
        public string AuthorName { get; set; }
        public string Email { get; set; }
        public LectureViewModel Lecture { get; set; }
    }
}
