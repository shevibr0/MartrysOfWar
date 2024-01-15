using DL.Models;

namespace DL
{
    public interface ISoldierDL
    {
        Task AddSoldierAsync(Soldier sildier);
        Task DeleteSoldierAsync(int soldierId);
        Task<IEnumerable<Soldier>> GetAllSoldiersAsync(int page);
        Task<Soldier> GetSoldierByIdAsync(int id);
        Task UpdateSoldierAsync(int soldierId, Soldier updatedSoldier);
    }
}