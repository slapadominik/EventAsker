using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Helpers;
using EventAsker.API.Migrations;
using EventAsker.API.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace EventAsker.API.Repositories
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

        public List<EventDto> GetEvents()
        {
            List<Event> eventList = _context.Events.Where(x => x.IsActive).Include(e => e.Questions).Include(e => e.Lectures).ToList();
            List<EventDto> eventListDto = new List<EventDto>();
            eventListDto = _mapper.Map<List<Event>,List<EventDto>>(eventList);
            return eventListDto;
        }

        public bool AddEvent(AddEventDto dto)
        {
            string imageFileName;
            if (ImageFileHelper.SaveFile(dto.Image, out imageFileName))
            {
                Event eventToAdd = _mapper.Map<Event>(dto);
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
            var eventDto = _mapper.Map<Event, EventDto>(getEvent);
            return eventDto;
        }

        public EditEventDto EditEvent(EditEventDto dto)
        {
            var eventToEdit = _context.Events.SingleOrDefault(e => e.EventId == dto.EventId);

            eventToEdit.Name = dto.Name;
            eventToEdit.Street = dto.Description;
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

            return _mapper.Map<Event, EditEventDto>(eventToEdit);
        }
    }
}
