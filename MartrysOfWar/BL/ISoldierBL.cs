using Entities.DTO;

namespace BL
{
    public interface ISoldierBL
    {
        Task AddSoldierAsync(SoldierDTO soldierDTO);
        Task DeleteSoldierAsync(int soldierId);
        Task<IEnumerable<SoldierDTO>> GetAllSoldiersAsync();
        Task<SoldierDTO> GetSoldierByIdAsync(int id);
        Task UpdateSoldierAsync(int soldierId, SoldierDTO updatedSoldierDTO);
    }
}