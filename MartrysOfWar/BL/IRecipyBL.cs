using Entities.DTO;

namespace BL
{
    public interface IRecipyBL
    {
        Task AddRecipyAsync(RecipyDTO recipyDTO);
        Task DeleteRecipyAsync(int recipyId);
        Task<IEnumerable<RecipyDTO>> GetAllRecipiesAsync();
        Task<RecipyDTO> GetRecipyByIdAsync(int id);
        Task UpdateRecipyAsync(int recipyId, RecipyDTO updatedRecipyDTO);
    }
}