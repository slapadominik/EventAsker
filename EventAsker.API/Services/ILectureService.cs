using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;

namespace EventAsker.API.Services
{
    public interface ILectureService
    {
        bool AddLectrues(IEnumerable<AddLectureDto> lectures);
        IEnumerable<LectureDto> GetLectures();
        IEnumerable<LectureDto> GetLecturesById(int id);
    }
}
