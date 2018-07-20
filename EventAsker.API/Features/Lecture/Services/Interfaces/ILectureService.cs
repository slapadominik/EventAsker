using System.Collections.Generic;
using EventAsker.API.Features.Lecture.DTO;

namespace EventAsker.API.Features.Lecture.Services.Interfaces
{
    public interface ILectureService
    {
        bool AddLectrues(IEnumerable<AddLectureDto> lectures);
        IEnumerable<LectureDto> GetLectures();
        IEnumerable<LectureDto> GetLecturesById(int id);
    }
}
