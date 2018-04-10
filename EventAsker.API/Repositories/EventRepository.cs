using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Model;

namespace EventAsker.API.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;

        public EventRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<EventDto> GetEvents()
        {
            var eventList = _context.Events
                .Select(e => new EventDto()
                {
                    AudienceKey = e.AudienceKey,
                    Name = e.Name,
                    Street = e.Street,
                    City = new CityDto()
                    {
                        CityId = e.City.CityId,
                        CityName = e.City.CityName
                    },
                    Date = e.Date,
                    Description = e.Description,
                    EventId = e.EventId,
                    Lectures = e.Lectures.Select(l => new LectureDto()
                    {
                        Description = l.Description,
                        EventId = l.EventId,
                        EndTime = l.EndTime,
                        StartTime = l.StartTime,
                        LectureId = l.LectureId,
                        Lecturer = new LecturerDto()
                        {
                            FirstName = l.Lecturer.FirstName,
                            LastName = l.Lecturer.LastName,
                            Company = l.Lecturer.Company,
                            LecturerId = l.LecturerId
                        },
                        Topic = l.Topic
                    }).ToList(),
                    Questions = e.Questions.Select(q => new QuestionDto()
                    {
                        EventId = q.EventId,
                        Lecturer = new LecturerDto()
                        {
                            FirstName = q.Lecturer.FirstName,
                            LastName = q.Lecturer.LastName,
                            Company = q.Lecturer.Company,
                            LecturerId = q.LecturerId
                        },
                        AuthorName = q.AuthorName,
                        Email = q.Email,
                        QuestionContent = q.QuestionContent,
                        QuestionId = q.QuestionId
                    }).ToList()

                }).ToList();

            return eventList;
        }

        public void AddEvent(AddEventDto dto)
        {
            var newEvent = new Event
            {
                Name = dto.Name,
                Street = dto.Street,
                Date = DateTime.ParseExact(dto.Date, "dd/MM/yyyy", null),
                Description = dto.Description,
                AudienceKey = dto.AudienceKey,
                CityId = dto.CityId,
            };

            _context.Add(newEvent);
            _context.SaveChanges();
        }

        public void DeleteEvent(DeleteEventDto dto)
        {
            var eventToDelete = _context.Events
                .Single(e => e.EventId == dto.EventId);

            _context.Events.Remove(eventToDelete);
            _context.SaveChanges();
        }
    }
}
