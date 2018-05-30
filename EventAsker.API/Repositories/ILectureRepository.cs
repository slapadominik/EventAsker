using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Repositories
{
    public interface ILectureRepository
    {
        bool AddLectrues(IEnumerable<AddLectureDto> dtos);
        IEnumerable<LectureDto> GetLectures();
        IEnumerable<LectureDto> GetLecturesById(int id);

    }
}
