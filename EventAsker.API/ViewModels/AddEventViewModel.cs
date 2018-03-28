using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.ViewModels
{
    public class AddEventViewModel
    {
        public string Name { get; set; }
        public string Street { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
        public string AudienceKey { get; set; }
        public int CityName { get; set; }
    }
}
