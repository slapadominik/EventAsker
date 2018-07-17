using System.Collections.Generic;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Security.Authentication.DTO;

namespace EventAsker.API.Features.Event.Services.Interfaces
{
    public interface IEventService
    {
        List<EventDto> GetEvents();
        bool AddEvent(AddEventDto dto);
        void DeleteEvent(DeleteEventDto dto);
        bool CheckEventPassword(CheckEventPasswordDto dto);
        EventDto GetEvent(int id);
        EditEventDto EditEvent(EditEventDto dto);
    }
}
