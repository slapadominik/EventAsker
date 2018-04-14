using System.Collections.Generic;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface IQuestionRepository
    {
        void AddQuestionAsync(AddQuestionDto question);
        void DeleteQuestionAsync(DeleteQuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
         
        
    }
}