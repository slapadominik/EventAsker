using System.Collections.Generic;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Services
{
    public interface IQuestionService
    {
        Task AddQuestionAsync(AddQuestionDto question);
        Task DeleteQuestionAsync(DeleteQuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
    }
}