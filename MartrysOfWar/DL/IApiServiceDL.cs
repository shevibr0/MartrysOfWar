using DL.Models;

namespace DL.Services
{
    public interface IApiServiceDL
    {
        Task<string> FetchDataFromApiAsync(List<Soldier> soldiers);

        Task<string> CreateUrlTheilimFromApiAsync(Tehilim tehilim);
    }
}