using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventAsker.API.Dtos;
using EventAsker.API.Repositories;

namespace EventAsker.API.Services
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
