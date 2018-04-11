using System.Collections.Generic;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface IQuestionRepository
    {
        void AddQuestionAsync(QuestionDto question, int lecturerId);
        void DeleteQuestionAsync(QuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
         
        
    }
}