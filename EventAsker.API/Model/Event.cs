using System;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class Event
    {
        [Key]
        public int EventId {get; set;}
        [Required]
        public string Name {get; set;}
        [Required]
        public string Street {get; set;} 
        [Required]
        public DateTime Date {get; set;}
        [Required]
        public string Description {get; set;}
        public string AudienceKey {get; set;}

        public int CityId {get; set;}
        public City City {get; set;}
    }
}