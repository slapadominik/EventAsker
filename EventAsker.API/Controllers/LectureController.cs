using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Dtos;
using EventAsker.API.Interfaces;
using EventAsker.API.Services;
using EventAsker.API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class LectureController : Controller
    {
        private readonly ILectureService _lecturerService;
        private IMapper _mapper;

        public LectureController(ILectureService lectureService, IMapper mapper)
        {
            _lecturerService = lectureService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet("GetEvents")]
        public IActionResult GetEvents()
        {
            return Ok();
        }

        [HttpPost("AddLectures")]
        public IActionResult AddLectures([FromBody] LectureContainerDto lecturesContainer)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var lecturesDto = lecturesContainer.Lectures; 
            _lecturerService.AddLectrues(lecturesDto);
            return Ok();
        }


    }
}
