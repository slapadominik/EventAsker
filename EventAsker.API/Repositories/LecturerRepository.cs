using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EventAsker.API.Context;
using EventAsker.API.Dtos;
using EventAsker.API.Model;
using Microsoft.EntityFrameworkCore;

namespace EventAsker.API.Repositories
{

    public class LecturerRepository : ILecturerRepository
    {
        private ApplicationDbContext _context;
        private IMapper _mapper;
        public LecturerRepository(ApplicationDbContext context, IMapper mapper){
            _context = context;
            _mapper = mapper;
        }

        public async Task AddLecturerAsync(LecturerDto lecturerDto)
        {
            Lecturer lecturer = _mapper.Map<Lecturer>(lecturerDto); 
            await _context.AddAsync(lecturer);
            await _context.SaveChangesAsync();
        }

        public async Task<LecturerDto> GetLecturerByIdAsync(int id)
        {
            Lecturer lecturer = await _context.Lecturer.SingleOrDefaultAsync(x => x.LecturerId == id);
            if (lecturer == null){
                return null;
            }
            return _mapper.Map<LecturerDto>(lecturer);
        }
    }
}