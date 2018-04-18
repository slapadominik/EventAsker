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
        private ILecturerRepository _lecturerRepo;

        public AutoMapperProfiles(ILecturerRepository lecturerRepo){
            _lecturerRepo= lecturerRepo;
        }

        public AutoMapperProfiles(){
            CreateMap<Question, QuestionDto>();   
            CreateMap<Admin, AdminLoginDto>();

            CreateMap<Admin, AdminViewModel>()
                .ForMember(dest => dest.AdminUsername, opts => opts.MapFrom(src => src.Username));
            
            CreateMap<AddEventDto, AddEventViewModel>();

            CreateMap<City, CityDto>();

            CreateMap<Event, EventDto>();

            CreateMap<LecturerDto, LecturerViewModel>();

             CreateMap<LecturerDto, Lecturer>();

            CreateMap<Lecturer, LecturerDto>();

            CreateMap<QuestionDto, QuestionViewModel>();

            CreateMap<EventDto, EventViewModel>()
                .ForMember(dest => dest.City, opts => opts.MapFrom(src => src.City.CityName));

            CreateMap<AddEventDto, Event>()
                .ForMember(dest => dest.Date, opts => opts.MapFrom(src => DateTime.ParseExact(src.Date, "dd/MM/yyyy", null)));

            CreateMap<AddQuestionDto, Question>();         
            
        }

        
        
    }
}