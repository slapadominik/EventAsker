using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet("GetEvents")]
        public IActionResult GetEvents()
        {
            var eventList = _eventService.GetEvents();

            return Ok(eventList);
        }

        [HttpPost("AddEvent")]
        public IActionResult AddEvent([FromBody]AddEventDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _eventService.AddEvent(dto);

            var addEventViewModel = new AddEventViewModel
            {
                Name = dto.Name,
                Description = dto.Description,
                Date = dto.Date,
                Street = dto.Street,
                AudienceKey = dto.AudienceKey
            };

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
