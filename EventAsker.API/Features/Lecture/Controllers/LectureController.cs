using AutoMapper;
using EventAsker.API.Features.Lecture.DTO;
using EventAsker.API.Features.Lecture.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace EventAsker.API.Features.Lecture.Controllers
{
    [Authorize]
    [Route("api/event/[controller]")]
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

        [AllowAnonymous]
        [HttpGet("GetLecturesByEventId")]
        public IActionResult GetLecturesByEventId(int id)
        {
            var lectures = _lecturerService.GetLecturesById(id);
            return Ok(lectures);
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
