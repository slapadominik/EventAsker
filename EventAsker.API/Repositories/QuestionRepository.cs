using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ApplicationDbContext _context;
        private IMapper _mapper;

        public QuestionRepository(ApplicationDbContext context, IMapper mapper){
            _context = context;
            _mapper = mapper;
        }
        public async Task AddQuestionAsync(AddQuestionDto questionDto)
        {
            Question question = _mapper.Map<Question>(questionDto);
            await _context.Question.AddAsync(question);
            await _context.SaveChangesAsync();
        }

        public void DeleteQuestion(DeleteQuestionDto questionDto)
        {
            Question question = _context.Question.SingleOrDefault(q => q.QuestionId == questionDto.QuestionId);
            _context.Question.Remove(question);
            _context.SaveChanges();
        }

        public IEnumerable<QuestionDto> GetAllQuestions()
        {
            return _context.Question.Select(q => _mapper.Map<QuestionDto>(q)).ToList();
        }

        public IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId)
        {
            return _context.Question.Where(q => q.EventId == eventId).Select(x => _mapper.Map<QuestionDto>(x)).ToList();
        }

    }
}