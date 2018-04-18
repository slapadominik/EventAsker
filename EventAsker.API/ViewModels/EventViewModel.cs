using System;
using System.Collections.Generic;

namespace EventAsker.API.ViewModels
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

        public ICollection<LecturerViewModel> Lectures { get; set; }
        public ICollection<QuestionViewModel> Questions { get; set; }

    }
}
