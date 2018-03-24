using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.Model;

namespace EventAsker.API.Services
{
    public class EventService : IEventService
    {
        private readonly ApplicationDbContext _context;

        public EventService(ApplicationDbContext context)
        {
            _context = context;
        }

        public void AddEvent(AddEventDto dto)
        {
            var newEvent = new Event
            {
                Name = dto.Name,
                Street = dto.Street,
                Date = DateTime.ParseExact(dto.Date, "dd/MM/yyyy", null),
                Description = dto.Description,
                AudienceKey = dto.AudienceKey,
                CityId = dto.CityId,
            };

            _context.Add(newEvent);
            _context.SaveChanges();
        }
    }
}
