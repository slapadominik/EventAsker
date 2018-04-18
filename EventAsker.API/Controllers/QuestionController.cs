using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace EventAsker.API.Controllers
{

    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly IQuestionService _serivce;
        public QuestionController(IQuestionService service){
            _serivce = service;
        }

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

    }
}