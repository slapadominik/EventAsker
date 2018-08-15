using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventAsker.API.Domain.Converters.Interfaces
{
    public interface IConverter<TIn, TOut>
    {
        TOut Convert(TIn input);
    }
}
