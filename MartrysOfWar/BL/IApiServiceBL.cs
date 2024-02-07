using Entities.DTO;

namespace BL.Services
{
    public interface IApiServiceBL
    {
        Task<string> FetchDataFromApiAsync();
        Task<string> CreateUrlTheilimFromApiAsync(TehilimUrlDTO tehilim);
    }
}