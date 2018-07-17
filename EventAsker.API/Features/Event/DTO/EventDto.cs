using System.Collections.Generic;
using EventAsker.API.Features.Lecture.DTO;
using EventAsker.API.Features.Question.DTO;

namespace EventAsker.API.Features.Event.DTO
{
    public class EventDto
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public string City {get; set;}
        public string ImageFilename { get; set; }

        public ICollection<LectureDto> Lectures { get; set; }
        public ICollection<QuestionDto> Questions { get; set; }

    }
}
