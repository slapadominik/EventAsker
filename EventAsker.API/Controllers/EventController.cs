using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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

            List<EventViewModel> eventViewModels = new List<EventViewModel>();

            foreach (var eventDto in eventList)
            {
                eventViewModels.Add(new EventViewModel()
                {
                    Name = eventDto.Name,
                    Date = eventDto.Date,
                    Description = eventDto.Description,
                    Street = eventDto.Street,
                    AudienceKey = eventDto.AudienceKey,
                    Lectures = eventDto.Lectures.Select(x => new LectureViewModel()
                    {
                        Description = x.Description,
                        Lecturer = new LecturerViewModel()
                        {
                            Company = x.Lecturer.Company,
                            LastName = x.Lecturer.LastName,
                            FirstName = x.Lecturer.FirstName
                        },
                        EndTime = x.EndTime,
                        StartTime = x.StartTime,
                        Topic = x.Topic
                    }).ToList(),
                    City = new CityViewModel()
                    {
                        CityName = eventDto.City.CityName
                    },
                    Questions = eventDto.Questions.Select(x => new QuestionViewModel()
                    {
                        Lecturer = new LecturerViewModel()
                        {
                            FirstName = x.Lecturer.FirstName,
                            LastName = x.Lecturer.LastName,
                            Company = x.Lecturer.Company,
                        }
                    }).ToList()
           
                });
            }

            return Ok(eventViewModels);
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
