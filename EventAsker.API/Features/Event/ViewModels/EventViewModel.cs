using System;
using System.Collections.Generic;
using EventAsker.API.Features.Lecture.ViewModels;
using EventAsker.API.Features.Question.ViewModels;

namespace EventAsker.API.Features.Event.ViewModels
{
    public class EventViewModel
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public string City {get; set;}
        public string ImageFilename { get; set; }

        public ICollection<LectureViewModel> Lectures { get; set; }
        public ICollection<QuestionViewModel> Questions { get; set; }

    }
}
