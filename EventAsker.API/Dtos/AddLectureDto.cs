using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Dtos
{
    public class AddLectureDto
    {
        public string Topic { get; set; }
        public string Description { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string LecturerName { get; set; }
        public int EventId { get; set; }
    }
}
