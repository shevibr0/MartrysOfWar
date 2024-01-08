using AutoMapper;
using DL.Models;
using DL;
using Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class MemoryBL : IMemoryBL
    {
        private IMemoryDL _memoryDL;
        private IMapper _mapper;

        public MemoryBL(IMemoryDL memoryDL, IMapper mapper)
        {
            _mapper = mapper;
            _memoryDL = memoryDL;
        }

        public async Task<IEnumerable<MemoryDTO>> GetAllMemoriesAsync()
        {
            var memories = await _memoryDL.GetAllMemoriesAsync();
            return _mapper.Map<IEnumerable<MemoryDTO>>(memories);
        }

        public async Task<MemoryDTO> GetMemoryByIdAsync(int id)
        {
            var memory = await _memoryDL.GetMemoryByIdAsync(id);
            return _mapper.Map<MemoryDTO>(memory);
        }
        public async Task AddMemoryAsync(MemoryDTO memoryDto)
        {
            var memory = _mapper.Map<Memory>(memoryDto);
            await _memoryDL.AddMemoryAsync(memory);
        }
        public async Task UpdateMemoryAsync(int memoryId, MemoryDTO updatedMemoryDto)
        {
            var updatedMemory = _mapper.Map<Memory>(updatedMemoryDto);
            await _memoryDL.UpdateMemoryAsync(memoryId, updatedMemory);
        }
        public async Task DeleteMemoryAsync(int memoryId)
        {
            await _memoryDL.DeleteMemoryAsync(memoryId);
        }

    }

}
