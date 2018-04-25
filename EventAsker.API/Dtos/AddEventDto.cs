using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Dtos
{
    public class AddEventDto
    {
        [Required(ErrorMessage = "No event name!")]
        public string Name { get; set; }
        public string Street { get; set; }
        [Required(ErrorMessage = "Wrong date format!")]
        public string Date { get; set; }
        [Required(ErrorMessage = "No event description!")]
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        [Required(ErrorMessage = "Specify event's city!")]
        public string City {get; set;}
        public string LecturerName {get; set;}
        public int? LectureId {get; set;}
        public bool IsActive {get; set;}
        
    }
}