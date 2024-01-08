using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class MemoryDL : IMemoryDL
    {
        private MartyrsofwarContext _martyrsofwarContext;

        public MemoryDL(MartyrsofwarContext _martyrsofwarContext)
        {
            this._martyrsofwarContext = _martyrsofwarContext;
        }

        public async Task<IEnumerable<Memory>> GetAllMemoriesAsync()
        {
            try
            {
                return await _martyrsofwarContext.Memories.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Memory> GetMemoryByIdAsync(int id)
        {
            try
            {   
                    return await _martyrsofwarContext.Memories.FindAsync(id);
           
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task AddMemoryAsync(Memory memory)
        {
            try
            {
                _martyrsofwarContext.Memories.Add(memory);
                await _martyrsofwarContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task UpdateMemoryAsync(int memoryId, Memory updatedMemory)
        {
            try
            {
                var existingMemory = await _martyrsofwarContext.Memories.FindAsync(memoryId);

                if (existingMemory != null)
                {
                    _martyrsofwarContext.Entry(existingMemory).CurrentValues.SetValues(updatedMemory);
                    await _martyrsofwarContext.SaveChangesAsync();
                }
                // Handle case where user with the specified ID is not found
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task DeleteMemoryAsync(int memoryId)
        {
            try
            {
                var memoryToDelete = await _martyrsofwarContext.Memories.FindAsync(memoryId);

                if (memoryToDelete != null)
                {
                    _martyrsofwarContext.Memories.Remove(memoryToDelete);
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
