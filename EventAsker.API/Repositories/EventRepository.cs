using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;
        private IMapper _mapper;
        public EventRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public List<EventDto> GetEvents()
        {
            List<Event> eventList = _context.Events.Where(x => x.IsActive).Include(e => e.Questions).Include(e => e.Lectures).ToList();
            List<EventDto> eventListDto = new List<EventDto>();
            eventListDto = _mapper.Map<List<Event>,List<EventDto>>(eventList);
            return eventListDto;
        }

        public void AddEvent(AddEventDto dto)
        {
            var newEvent = _mapper.Map<Event>(dto);

            _context.Add(newEvent);
            _context.SaveChanges();
        }

        public void DeleteEvent(DeleteEventDto dto)
        {
            var eventToDelete = _context.Events
                .Single(e => e.EventId == dto.EventId);
            
             eventToDelete.IsActive = false;
            _context.SaveChanges();
        }

        public bool CheckEventPassword(CheckEventPasswordDto dto)
        {
            var eventToCheck = _context.Events
                .Single(e => e.EventId == dto.EventId);

            if (eventToCheck.AudienceKey == dto.AudienceKey)
                return true;
            return false;
        }
    }
}
