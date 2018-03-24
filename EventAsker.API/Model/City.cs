using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EventAsker.API.Model
{
    public class City
    {
        [Key]
        public int CityId {get; set;}
        [Required]
        public string CityName {get; set;}

        public ICollection<Event> Events {get; set;}
    }
}