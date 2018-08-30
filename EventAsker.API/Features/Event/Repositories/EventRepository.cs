using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using EventAsker.API.Domain.DataAccess;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Event.Repositories.Interfaces;
using EventAsker.API.Features.Security.Authentication.DTO;
using EventAsker.API.Helpers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;



namespace EventAsker.API.Features.Event.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;
        private IMapper _mapper;
        private IHostingEnvironment _env;

        public EventRepository(ApplicationDbContext context, IMapper mapper, IHostingEnvironment env)
        {
            _context = context;
            _mapper = mapper;
            _env = env;
        }

        public List<Domain.Entity.Event> GetEvents()
        {
            return _context.Events.Where(x => x.IsActive).Include(e => e.Questions).Include(e => e.Lectures).ToList();
        }

        public bool AddEvent(AddEventDto dto)
        {
            string imageFileName;
            if (ImageFileHelper.SaveFile(dto.Image, out imageFileName))
            {
                Domain.Entity.Event eventToAdd = _mapper.Map<Domain.Entity.Event>(dto);
                eventToAdd.ImageFilename = imageFileName;
                _context.Events.Add(eventToAdd);
                return _context.SaveChanges() > 0;
            }
            return false;
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

        public EventDto GetEvent(int id)
        {
            var getEvent = _context.Events.Include(e => e.Lectures).SingleOrDefault(e => e.EventId == id);
            var eventDto = _mapper.Map<Domain.Entity.Event, EventDto>(getEvent);
            return eventDto;
        }

        public EditEventDto EditEvent(EditEventDto dto)
        {
            var eventToEdit = _context.Events.SingleOrDefault(e => e.EventId == dto.EventId);

            eventToEdit.Name = dto.Name;
            eventToEdit.Street = dto.Street;
            eventToEdit.Date = dto.Date;
            eventToEdit.Description = dto.Description;
            eventToEdit.AudienceKey = dto.AudienceKey;
            eventToEdit.City = dto.City;

            if (dto.Image != null)
            {
                ImageFileHelper.SaveFile(dto.Image, out var imageFileName);
                eventToEdit.ImageFilename = imageFileName;
            }

            _context.SaveChanges();

            return _mapper.Map<Domain.Entity.Event, EditEventDto>(eventToEdit);
        }
    }
}
