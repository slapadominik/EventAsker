using System.Collections.Generic;
using System.Linq;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ApplicationDbContext _context;

        public QuestionRepository(ApplicationDbContext context){
            _context = context;
        }
        public async void AddQuestionAsync(QuestionDto questionDto, int lecturerId)
        {
            Question question = new Question(){
                QuestionId = questionDto.QuestionId,
                QuestionContent = questionDto.QuestionContent,
                AuthorName = questionDto.AuthorName,
                Email = questionDto.Email,
                EventId = questionDto.EventId,
                Lecturer= _context.Lecturer.SingleOrDefault(x => x.LecturerId == lecturerId)
            };
            await _context.Question.AddAsync(question);
            await _context.SaveChangesAsync();
        }

        public async void DeleteQuestionAsync(QuestionDto questionDto)
        {
            Question question = await _context.Question.SingleOrDefaultAsync(q => q.QuestionId == questionDto.QuestionId);
            _context.Question.Remove(question);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<QuestionDto> GetAllQuestions()
        {
            return _context.Question.Select(q => MapQuestionToDto(q)).ToList();
        }

        public IEnumerable<QuestionDto> GetQuestionsByEventId(int eventId)
        {
            return _context.Question.Where(q => q.EventId == eventId).Select(x => MapQuestionToDto(x)).ToList();
        }

        private QuestionDto MapQuestionToDto(Question question){
             return new QuestionDto(){
                QuestionId = question.QuestionId,
                QuestionContent = question.QuestionContent,
                AuthorName = question.AuthorName,
                Email = question.Email,
                EventId = question.EventId,
                Lecturer = MapLecturerToDto(_context.Question.FirstOrDefault(x => x.LecturerId == question.LecturerId).Lecturer)
            };
        }

        private LecturerDto MapLecturerToDto(Lecturer lecturer){
            return new LecturerDto(){
                LecturerId = lecturer.LecturerId,
                FirstName = lecturer.FirstName,
                LastName = lecturer.LastName,
                Company = lecturer.Company
            };
        }
    }
}