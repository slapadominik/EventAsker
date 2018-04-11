using System;

namespace EventAsker.API.ViewModels
{
    public class LectureViewModel
    {
        public string Topic { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public LecturerViewModel Lecturer { get; set; }
    }
}
