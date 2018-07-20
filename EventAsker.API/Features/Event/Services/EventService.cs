using System.Collections.Generic;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Event.Repositories.Interfaces;
using EventAsker.API.Features.Event.Services.Interfaces;
using EventAsker.API.Features.Security.Authentication.DTO;


namespace EventAsker.API.Features.Event.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepo;

        public EventService(IEventRepository eventRepo)
        {
            _eventRepo = eventRepo;
        }

        public List<EventDto> GetEvents()
        {
           return _eventRepo.GetEvents();
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
