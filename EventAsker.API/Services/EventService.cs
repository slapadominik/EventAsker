﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.Model;
using EventAsker.API.Repositories;

namespace EventAsker.API.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _repository;

        public EventService(IEventRepository repository)
        {
            _repository = repository;
        }

        public EventDto GetEvent(int eventId)
        {
            return _repository.GetEvent(eventId);
        }

        public List<EventDto> GetEvents()
        {
           return _repository.GetEvents();
        }

        public bool AddEvent(AddEventDto dto)
        {
            return _repository.AddEvent(dto);
        }

        public void DeleteEvent(DeleteEventDto dto)
        {
            _repository.DeleteEvent(dto);
        }

        public bool CheckEventPassword(CheckEventPasswordDto dto)
        {
            return _repository.CheckEventPassword(dto);
        }
    }
}
