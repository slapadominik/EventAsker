using System.Collections.Generic;
using EventAsker.API.Features.Lecture.DTO;

namespace EventAsker.API.Features.Lecture.Repositories.Interfaces
{
    public interface ILectureRepository
    {
        bool AddLectrues(IEnumerable<AddLectureDto> dtos);
        IEnumerable<LectureDto> GetLectures();
        IEnumerable<LectureDto> GetLecturesById(int id);

    }
}
