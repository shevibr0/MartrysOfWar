using DL.Models;

namespace DL.Services
{
    public interface IApiServiceDL
    {
        Task<List<Soldier>> FetchDataFromApiAsync(List<Soldier> soldiers);
    }
}