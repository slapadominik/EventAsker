using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Repositories;

namespace EventAsker.API.Services
{
    public class QuestionService : IQuestionService
    {
        private readonly IQuestionRepository _repository;

        public QuestionService(IQuestionRepository repository)
        {
            _repository = repository;
        }
        
        public async Task AddQuestionAsync(AddQuestionDto questionDto)
        {
            if (questionDto == null)
                throw new InvalidOperationException("Question mustn't be null");
            
            await _repository.AddQuestionAsync(questionDto);
        }

        public async Task DeleteQuestionAsync(DeleteQuestionDto questionDto)
        {
            if (questionDto == null)
                throw new InvalidOperationException("Question mustn't be null");
            
            await _repository.DeleteQuestionAsync(questionDto);
        }

        public IEnumerable<QuestionDto> GetAllQuestions()
        {
            return _repository.GetAllQuestions();
        }

        public IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId)
        {
            return _repository.GetQuestionsByEventId(eventId);
        }
    }
}