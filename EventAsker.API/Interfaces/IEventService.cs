using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Interfaces
{
    public interface IEventService
    {
        void AddEvent(AddEventDto dto);
    }
}
