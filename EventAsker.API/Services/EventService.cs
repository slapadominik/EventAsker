using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.Model;
using EventAsker.API.Repositories;
using Microsoft.EntityFrameworkCore.Storage;

namespace EventAsker.API.Services
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
    }
}
