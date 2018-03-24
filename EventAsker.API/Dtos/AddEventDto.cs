using System;

namespace EventAsker.API.Dtos
{
    public class AddEventDto
    {
        public string Name { get; set; }
        public string Street { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public int CityId { get; set; }
    }
}
