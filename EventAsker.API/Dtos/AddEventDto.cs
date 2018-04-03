using System;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Dtos
{
    public class AddEventDto
    {
        [Required(ErrorMessage = "No event name!")]
        public string Name { get; set; }
        [Required(ErrorMessage = "No event location!")]
        public string Street { get; set; }
        [Required(ErrorMessage = "")]
        public string Date { get; set; }
        [Required(ErrorMessage = "No event description!")]
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public int CityId { get; set; }
    }
}
