using DL.Models;

namespace DL
{
    public interface IRecipyDL
    {
        Task AddRecipyAsync(Recipy recipy);
        Task DeleteRecipyAsync(int recipyId);
        Task<IEnumerable<Recipy>> GetAllRecipiesAsync();
        Task<Recipy> GetRecipyByIdAsync(int id);
        Task UpdateRecipyAsync(int recipyId, Recipy updatedRecipy);
    }
}