using AutoMapper;
using EventAsker.API.Domain.Entity;
using EventAsker.API.Features.Event.DTO;
using EventAsker.API.Features.Lecture.DTO;
using EventAsker.API.Features.Question.DTO;
using EventAsker.API.Features.Security.Authentication.DTO;
using EventAsker.API.ViewModels;

namespace EventAsker.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {

        public AutoMapperProfiles(){
            CreateMap<Lecture, LectureDto>();
            CreateMap<LectureDto, LectureViewModel>();
            CreateMap<Question, QuestionDto>();   
            CreateMap<Admin, AdminLoginDto>();

            CreateMap<Admin, AdminViewModel>()
                .ForMember(dest => dest.AdminUsername, opts => opts.MapFrom(src => src.Username));
            
            CreateMap<AddEventDto, AddEventViewModel>();

            CreateMap<Event, EventDto>();

            CreateMap<QuestionDto, QuestionViewModel>();

            CreateMap<EventDto, EventViewModel>();

            CreateMap<AddEventDto, Event>();

            CreateMap<AddQuestionDto, Question>();

            CreateMap<AddLectureDto, Lecture>();

            CreateMap<EventDto, Event>();

            CreateMap<EditEventDto, Event>();

            CreateMap<Event, EditEventDto>();
        }

        
        
    }
}