using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly IEventService _eventService;
        private IMapper _mapper;

        public EventController(IEventService eventService, IMapper mapper)
        {
            _eventService = eventService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("GetEvents")]
        public IActionResult GetEvents()
        {
            var eventList = _eventService.GetEvents();
            List<EventViewModel> eventViewModels = new List<EventViewModel>();           
            eventViewModels = _mapper.Map<List<EventDto>,List<EventViewModel>>(eventList);

            return Ok(eventViewModels);
        }

        [HttpPost("AddEvent")]
        public IActionResult AddEvent([FromBody]AddEventDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _eventService.AddEvent(dto);
            AddEventViewModel addEventViewModel = _mapper.Map<AddEventViewModel>(dto);

            return Ok(addEventViewModel);
        }

        [HttpDelete("DeleteEvent")]
        public IActionResult DeleteEvent(int eventId)
        {
            var deleteEventDto = new DeleteEventDto
            {
                EventId = eventId
            };
            _eventService.DeleteEvent(deleteEventDto);
            return Ok(deleteEventDto);
        }
    }
}
