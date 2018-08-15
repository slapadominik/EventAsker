using System.Linq;
using AutoMapper;
using EventAsker.API.Domain.Converters.Interfaces;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Event.DTO;

namespace EventAsker.API.Domain.Converters
{
    public class EventConverter : IConverter<Event, EventDto>
    {
        private readonly IMapper _mapper;

        public EventConverter(IMapper mapper)
        {
            _mapper = mapper;
        }

        public EventDto Convert(Event eventDomain)
        {
            EventDto eventDto = _mapper.Map<EventDto>(eventDomain);
            foreach (var question in eventDto.Questions)
            {
                foreach (var lecture in eventDto.Lectures)
                {
                    if (question.LectureId == lecture.LectureId)
                    {
                        question.LectureTopic = lecture.Topic;
                    }
                }
            }

            return eventDto;
        }
    }
}
