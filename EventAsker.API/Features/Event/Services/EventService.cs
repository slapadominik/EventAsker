using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using EventAsker.API.Domain.Converters.Interfaces;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Event.Repositories.Interfaces;
using EventAsker.API.Features.Event.Services.Interfaces;
using EventAsker.API.Features.Security.Authentication.DTO;


namespace EventAsker.API.Features.Event.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepo;
        private readonly IConverter<Domain.Entity.Event, EventDto> _eventConverter;

        public EventService(IEventRepository eventRepo, IConverter<Domain.Entity.Event, EventDto> eventConverter)
        {
            _eventRepo = eventRepo;
            _eventConverter = eventConverter;
        }

        public List<EventDto> GetEvents()
        {
            List<Domain.Entity.Event> eventsDomain =_eventRepo.GetEvents();
            List<EventDto> eventDtos = new List<EventDto>();
            foreach (var eventDomain in eventsDomain)
            {
                eventDtos.Add(_eventConverter.Convert(eventDomain));
            }

            return eventDtos;
        }

        public bool AddEvent(AddEventDto dto)
        {
            return _eventRepo.AddEvent(dto);
        }

        public void DeleteEvent(DeleteEventDto dto)
        {
            _eventRepo.DeleteEvent(dto);
        }

        public bool CheckEventPassword(CheckEventPasswordDto dto)
        {
            return _eventRepo.CheckEventPassword(dto);
        }

        public EventDto GetEvent(int id)
        {
            return _eventRepo.GetEvent(id);
        }

        public EditEventDto EditEvent(EditEventDto dto)
        {
            return _eventRepo.EditEvent(dto);
        }
    }
}
