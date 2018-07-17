using System.Collections.Generic;
using EventAsker.API.Features.Lecture.DTO;
using EventAsker.API.Features.Lecture.Repositories.Interfaces;
using EventAsker.API.Features.Lecture.Services.Interfaces;


namespace EventAsker.API.Features.Lecture.Services
{
    public class LectureService : ILectureService
    {
        private ILectureRepository _repo;

        public LectureService(ILectureRepository repo)
        {
            _repo = repo;
        }

        public bool AddLectrues(IEnumerable<AddLectureDto> lectures)
        {
            return _repo.AddLectrues(lectures);
        }

        public IEnumerable<LectureDto> GetLectures()
        {
            return _repo.GetLectures();
        }

        public IEnumerable<LectureDto> GetLecturesById(int id)
        {
            return _repo.GetLecturesById(id);
        }
    }
}
