using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class RecipyDL : IRecipyDL
    {

        private MartyrsofwarContext _martyrsofwarContext = new MartyrsofwarContext();
        public async Task<IEnumerable<Recipy>> GetAllRecipiesAsync()
        {
            try
            {
                return await _martyrsofwarContext.Recipies.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Recipy> GetRecipyByIdAsync(int id)
        {
            try
            {
                return await _martyrsofwarContext.Recipies.FindAsync(id);

            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task AddRecipyAsync(Recipy recipy)
        {
            try
            {
                _martyrsofwarContext.Recipies.Add(recipy);
                await _martyrsofwarContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task UpdateRecipyAsync(int recipyId, Recipy updatedRecipy)
        {
            try
            {
                var existingRecipy = await _martyrsofwarContext.Memories.FindAsync(recipyId);

                if (existingRecipy != null)
                {
                    _martyrsofwarContext.Entry(existingRecipy).CurrentValues.SetValues(updatedRecipy);
                    await _martyrsofwarContext.SaveChangesAsync();
                }
                // Handle case where user with the specified ID is not found
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task DeleteRecipyAsync(int recipyId)
        {
            try
            {
                var recipyToDelete = await _martyrsofwarContext.Recipies.FindAsync(recipyId);

                if (recipyToDelete != null)
                {
                    _martyrsofwarContext.Recipies.Remove(recipyToDelete);
                    await _martyrsofwarContext.SaveChangesAsync();
                }
                // Handle case where user with the specified ID is not found
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
