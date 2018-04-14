using System.Collections.Generic;
using EventAsker.API.Dtos;

namespace EventAsker.API.Services
{
    public interface IQuestionService
    {
        void AddQuestionAsync(AddQuestionDto question);
        void DeleteQuestionAsync(DeleteQuestionDto question);
        IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId);
        IEnumerable<QuestionDto> GetAllQuestions();
    }
}