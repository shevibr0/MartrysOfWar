using DL.Models;

namespace DL
{
    public interface IVolunteeringOptionDL
    {
        Task AddVolunteeringOptionAsync(VolunteeringOption VolunteeringOption);
        Task DeleteVolunteeringOptionAsync(int volunteeringOptionId);
        Task<IEnumerable<VolunteeringOption>> GetAllVolunteeringOptionsAsync();
        Task<VolunteeringOption> GetVolunteeringOptionByIdAsync(int id);
        Task UpdateVolunteeringOptionAsync(int volunteeringOptionId, VolunteeringOption updatedVolunteeringOption);
    }
}