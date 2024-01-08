 using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class PreparationDL : IPreparationDL
    {
        private MartyrsofwarContext _martyrsofwarContext = new MartyrsofwarContext();
        public async Task<IEnumerable<Preparation>> GetAllPreparationsAsync()
        {
            try
            {
                return await _martyrsofwarContext.Preparations.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Preparation> GetPreparationByIdAsync(int id)
        {
            try
            {
                return await _martyrsofwarContext.Preparations.FindAsync(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task AddPreparationAsync(Preparation Preparation)
        {
            try
            {
                _martyrsofwarContext.Preparations.Add(Preparation);
                await _martyrsofwarContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task UpdatePreparationAsync(int preparationId, Preparation updatedPreparation)
        {
            try
            {
                var existingPreparation = await _martyrsofwarContext.Preparations.FindAsync(preparationId);

                if (existingPreparation != null)
                {
                    _martyrsofwarContext.Entry(existingPreparation).CurrentValues.SetValues(updatedPreparation);
                    await _martyrsofwarContext.SaveChangesAsync();
                }
                // Handle case where user with the specified ID is not found
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task DeletePreparationAsync(int preparationId)
        {
            try
            {
                var preparationToDelete = await _martyrsofwarContext.Preparations.FindAsync(preparationId);

                if (preparationToDelete != null)
                {
                    _martyrsofwarContext.Preparations.Remove(preparationToDelete);
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
