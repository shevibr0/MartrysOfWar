﻿using BL;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MartrysOfWar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemoryController : ControllerBase
    {
        private IMemoryBL _memoryBL;
        public MemoryController(IMemoryBL memoryBL)
        {
            _memoryBL = memoryBL;
        }
        // GET: api/<MemoryController>
        [HttpGet]
        public async Task<IEnumerable<MemoryDTO>> GetAllMemories()
        {
            return await _memoryBL.GetAllMemoriesAsync();
        }

        // GET api/<MemoryController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MemoryDTO>> GetMemoryById(int id)
        {
            var memory = await _memoryBL.GetMemoryByIdAsync(id);

            if (memory == null)
            {
                return NotFound(); // or return appropriate HTTP response for not found
            }

            return Ok(memory);
        }

        [HttpPost]
        public async Task<ActionResult> AddUser([FromBody] MemoryDTO memoryDto)
        {
            await _memoryBL.AddMemoryAsync(memoryDto);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateMemory(int id, [FromBody] MemoryDTO updatedMemoryDto)
        {
            await _memoryBL.UpdateMemoryAsync(id, updatedMemoryDto);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteMemory(int id)
        {
            await _memoryBL.DeleteMemoryAsync(id);
            return Ok(); // or return appropriate HTTP response for success
        }
    
}
}
