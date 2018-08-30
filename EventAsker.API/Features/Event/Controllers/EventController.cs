using System.Collections.Generic;
using AutoMapper;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Event.Services.Interfaces;
using EventAsker.API.Features.Event.ViewModels;
using EventAsker.API.Features.Security.Authentication.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Features.Event.Controllers
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
        public IActionResult AddEvent([FromForm]AddEventDto dto)
         {
             if (!_eventService.AddEvent(dto))
             {
                ModelState.AddModelError("Image", "Image's format should be .png or .jpg");
             }

            AddEventViewModel addEventViewModel = _mapper.Map<AddEventViewModel>(dto);

            return Ok(addEventViewModel);
        }

        [HttpGet("GetEvent/{id}")]
        [AllowAnonymous]
        public IActionResult GetEvent(int id)
        {
            var getEvent = _eventService.GetEvent(id);
            var eventViewModel = _mapper.Map<EventDto, EventViewModel>(getEvent);

            return Ok(eventViewModel);
        }

        [HttpPut("EditEvent")]
        public IActionResult EditEvent([FromForm] EditEventDto dto)
        {
            _eventService.EditEvent(dto);

            return Ok(dto);
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

        [AllowAnonymous]
        [HttpPut("CheckEventPassword")]
        public IActionResult CheckEventPassword([FromBody]CheckEventPasswordDto dto)
        {
            if (!ModelState.IsValid)    
                return BadRequest(ModelState);

            var isPasswordCorrect = _eventService.CheckEventPassword(dto);
            if(isPasswordCorrect)
                return Ok();

            return Unauthorized();
        }
    }
}
