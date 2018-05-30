using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Interfaces
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
