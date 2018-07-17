using System.Collections.Generic;
using System.Threading.Tasks;
using EventAsker.API.Features.Question.DTO;

namespace EventAsker.API.Features.Question.Repositories.Interfaces
{
    public interface IQuestionRepository
    {
        Task AddQuestionAsync(AddQuestionDto question);
        void DeleteQuestion(DeleteQuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
         
        
    }
}