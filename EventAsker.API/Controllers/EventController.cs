using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
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

        [HttpPost]
        [Route("AddEvent")]
        public IActionResult AddEvent([FromBody]AddEventDto dto)
        {
            if (dto == null)
            {
                return BadRequest();
            }
            _eventService.AddEvent(dto);

            return Ok(dto);
        }
    }
}
