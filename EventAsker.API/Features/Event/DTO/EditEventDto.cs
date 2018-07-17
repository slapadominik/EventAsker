using Microsoft.AspNetCore.Http;

namespace EventAsker.API.Features.Event.DTO
{
    public class EditEventDto
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public string City { get; set; }
        public IFormFile Image { get; set; }
    }
}
