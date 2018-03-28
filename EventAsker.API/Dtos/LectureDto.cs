using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Dtos
{
    public class LectureDto
    {
        public int LectureId { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int EventId { get; set; }
        public int LecturerId { get; set; }
    }
}
