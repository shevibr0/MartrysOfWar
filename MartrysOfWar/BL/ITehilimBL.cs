using Entities.DTO;

namespace BL
{
    public interface ITehilimBL
    {
        Task AddTehilimAsync(TehilimDTO tehilimDTO);
        Task DeleteTehilimAsync(int TehilimId);
        Task<IEnumerable<TehilimDTO>> GetAllTehilimsAsync();
        Task<TehilimDTO> GetTehilimByIdAsync(int id);
        Task UpdateTehilimAsync(int tehilimId, TehilimDTO updatedTehilimDTO);
    }
}