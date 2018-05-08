using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Dtos
{
    public class CheckEventPasswordDto
    {
        public int EventId { get; set; }
        public string AudienceKey { get; set; }
    }
}
