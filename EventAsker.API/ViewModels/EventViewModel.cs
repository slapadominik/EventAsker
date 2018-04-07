using System;
using System.Collections.Generic;

namespace EventAsker.API.ViewModels
{
    public class EventViewModel
    {
        public string Name { get; set; }
        public string Street { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }

        public CityViewModel CityViewModel { get; set; }

        public List<LectureViewModel> Lectures { get; set; }
        public List<QuestionViewModel> Questions { get; set; }

        public EventViewModel()
        {
            Lectures = new List<LectureViewModel>();
            Questions = new List<QuestionViewModel>();
        }
    }
}
