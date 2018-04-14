using System;
using AutoMapper;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using EventAsker.API.ViewModels;

namespace EventAsker.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            CreateMap<Admin, AdminLoginDto>();

            CreateMap<Admin, AdminViewModel>()
                .ForMember(dest => dest.AdminUsername, opts => opts.MapFrom(src => src.Username));
            
            CreateMap<AddEventDto, AddEventViewModel>();

            CreateMap<City, CityDto>();

            CreateMap<Event, EventDto>();

            CreateMap<EventDto, EventViewModel>()
                .ForMember(dest => dest.City, opts => opts.MapFrom(src => src.City.CityName));

            CreateMap<AddEventDto, Event>()
                .ForMember(dest => dest.Date, opts => opts.MapFrom(src => DateTime.ParseExact(src.Date, "dd/MM/yyyy", null)));

            CreateMap<AddQuestionDto, Question>();
            CreateMap<Question, QuestionDto>();
        }

        
        
    }
}