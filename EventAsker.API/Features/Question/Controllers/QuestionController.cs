using System.Threading.Tasks;
using EventAsker.API.Features.Question.DTO;
using EventAsker.API.Features.Question.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Features.Question.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class QuestionController : Controller
    {
        private readonly IQuestionService _serivce;
        public QuestionController(IQuestionService service){
            _serivce = service;
        }

        [AllowAnonymous]
        [HttpPost("AddQuestion")]
        public async Task<IActionResult> AddQuestion([FromBody] AddQuestionDto questionDto){
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _serivce.AddQuestionAsync(questionDto);
            return Ok();
        }

        [HttpGet("GetQuestions")]
        public IActionResult GetQuestions(){
            return Ok(_serivce.GetAllQuestions());
        }

        [HttpGet("GetQuestions/{id}")]
        public IActionResult GetQuestions(int id){
            return Ok(_serivce.GetQuestionsByEventId(id));
        }

        [HttpDelete("DeleteQuestion/{id}")]
        public IActionResult DeleteQuestion(int id)
        {
            var deleteQuestionDto = new DeleteQuestionDto()
            {
                QuestionId = id
            };

            _serivce.DeleteQuestion(deleteQuestionDto);

            return Ok(deleteQuestionDto);
        }


    }
}