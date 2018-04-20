using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface ILecturerRepository
    {
         Task AddLecturerAsync(LecturerDto lecturer);
         Task<LecturerDto> GetLecturerByIdAsync(int id);
    }
}