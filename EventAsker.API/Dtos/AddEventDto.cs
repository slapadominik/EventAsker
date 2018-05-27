using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace EventAsker.API.Dtos
{
    public class AddEventDto
    {
        [Required(ErrorMessage = "Event's name is required!")]
        [StringLength(30, MinimumLength = 4, ErrorMessage = "Event's name must contain between 4 and 30 characters")]
        public string Name { get; set; }
        [MaxLength(30, ErrorMessage="Street can contain max 30 characters")]
        public string Street { get; set; }
        [Required(ErrorMessage = "Date is required!")]
        public string Date { get; set; }
        [Required(ErrorMessage = "Event's description is required!")]
        [MaxLength(300, ErrorMessage = "Description can contain max 300 characters")]
        public string Description { get; set; }
        [MaxLength(10, ErrorMessage="AudienceKey can contain max 10 characters")]
        public string AudienceKey { get; set; }
        [Required(ErrorMessage = "Specify event's city!")]
        [MaxLength(30, ErrorMessage="City can contain max 30 characters")]
        public string City {get; set;}
        public int? LectureId {get; set;}
        public bool IsActive {get; set;}
        public IFormFile Image {get; set;}
        
    }
}