using Entities.DTO;

namespace BL
{
    public interface IMemoryBL
    {
        Task AddMemoryAsync(MemoryDTO memoryDto);
        Task DeleteMemoryAsync(int memoryId);
        Task<IEnumerable<MemoryDTO>> GetAllMemoriesAsync();
        Task<MemoryDTO> GetMemoryByIdAsync(int id);
        Task UpdateMemoryAsync(int memoryId, MemoryDTO updatedMemoryDto);
    }
}