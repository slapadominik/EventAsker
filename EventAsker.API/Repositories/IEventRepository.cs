using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface IEventRepository
    {
        List<EventDto> GetEvents();
        bool AddEvent(AddEventDto dto);
        void DeleteEvent(DeleteEventDto dto);
        bool CheckEventPassword(CheckEventPasswordDto dto);
    }
}
