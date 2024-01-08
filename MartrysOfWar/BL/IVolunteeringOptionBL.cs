using Entities.DTO;

namespace BL
{
    public interface IVolunteeringOptionBL
    {
        Task AddVolunteeringOptionAsync(VolunteeringOptionDTO volunteeringOptionDTO);
        Task DeleteVolunteeringOptionAsync(int volunteeringOptionId);
        Task<IEnumerable<VolunteeringOptionDTO>> GetAllVolunteeringOptionsAsync();
        Task<VolunteeringOptionDTO> GetVolunteeringOptionByIdAsync(int id);
        Task UpdateVolunteeringOptionAsync(int volunteeringOptionId, VolunteeringOptionDTO updatedVolunteeringOptionDTO);
    }
}