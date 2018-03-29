using System;
using System.Collections.Generic;

namespace EventAsker.API.Dtos
{
    public class EventDto
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }

        public CityDto City{ get; set; }

        public List<LectureDto> Lectures { get; set; }
        public List<QuestionDto> Questions { get; set; }
    }
}
