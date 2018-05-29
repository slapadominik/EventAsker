using System;
using AutoMapper;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.Repositories;
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

        }

        
        
    }
}