using System.Collections.Generic;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface IQuestionRepository
    {
        Task AddQuestionAsync(AddQuestionDto question);
        Task DeleteQuestionAsync(DeleteQuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
         
        
    }
}