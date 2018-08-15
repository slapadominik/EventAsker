using System.Collections.Generic;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Security.Authentication.DTO;

namespace EventAsker.API.Features.Event.Repositories.Interfaces
{
    public interface IEventRepository
    {
        List<Domain.Entity.Event> GetEvents();
        bool AddEvent(AddEventDto dto);
        void DeleteEvent(DeleteEventDto dto);
        bool CheckEventPassword(CheckEventPasswordDto dto);
        EventDto GetEvent(int id);
        EditEventDto EditEvent(EditEventDto dto);
    }
}
