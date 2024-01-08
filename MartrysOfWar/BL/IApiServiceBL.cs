using Entities.DTO;

namespace BL.Services
{
    public interface IApiServiceBL
    {
        Task<List<SoldierDTO>> FetchDataFromApiAsync();
    }
}