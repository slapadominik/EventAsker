using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using EventAsker.API.Domain.DataAccess;
using EventAsker.API.Features.Lecture.DTO;
using EventAsker.API.Features.Lecture.Repositories.Interfaces;


namespace EventAsker.API.Features.Lecture.Repositories
{
    public class LectureRepository : ILectureRepository
    {
        private readonly ApplicationDbContext _context;
        private IMapper _mapper;

        public LectureRepository(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public bool AddLectrues(IEnumerable<AddLectureDto> dtos)
        {
            var lectures = _mapper.Map<List<Domain.Entity.Lecture>>(dtos);
            _context.Lecture.AddRange(lectures);
            
            return _context.SaveChanges() > 0;
        }

        public IEnumerable<LectureDto> GetLectures()
        {
            return _mapper.Map<IEnumerable<LectureDto>>(_context.Lecture.ToList());
        }

        public IEnumerable<LectureDto> GetLecturesById(int id)
        {
            return _mapper.Map<IEnumerable<LectureDto>>(_context.Lecture.Where(l => l.EventId ==id));
        }
    }
}
