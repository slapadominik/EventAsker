using System;
using System.Collections.Generic;
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
        
        public void AddQuestionAsync(QuestionDto questionDto, int lecturerId)
        {
            if (questionDto == null)
                throw new InvalidOperationException("Question mustn't be null");
            
            _repository.AddQuestionAsync(questionDto, lecturerId);
        }

        public void DeleteQuestionAsync(QuestionDto questionDto)
        {
            if (questionDto == null)
                throw new InvalidOperationException("Question mustn't be null");
            
            _repository.DeleteQuestionAsync(questionDto);
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