using DL.Models;

namespace DL
{
    public interface ITehilimDL
    {
        Task AddTehilimAsync(Tehilim tehilim);
        Task DeleteTehilimAsync(int tehilimId);
        Task<IEnumerable<Tehilim>> GetAllTehilimsAsync();
        Task<Tehilim> GetTehilimByIdAsync(int id);
        Task UpdateTehilimAsync(int tehilimId, Tehilim updatedTehilim);
    }
}