using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Dtos
{
    public class LecturerDto
    {
        public int LecturerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
    }
}
