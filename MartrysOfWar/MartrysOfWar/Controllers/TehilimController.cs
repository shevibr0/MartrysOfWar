using BL;
using DL;
using DL.Models;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MartrysOfWar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TehilimController : ControllerBase
    {
        private ITehilimBL _tehilimBL;
        public TehilimController(ITehilimBL tehilimBL)
        {
            _tehilimBL = tehilimBL;
        }
        // GET: api/<MemoryController>
        [HttpGet]
        public async Task<IEnumerable<TehilimDTO>> GetAllTehilims()
        {
            return await _tehilimBL.GetAllTehilimsAsync();
        }

        // GET api/<MemoryController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TehilimDTO>> GetTehilimById(int id)
        {
            var tehilim = await _tehilimBL.GetTehilimByIdAsync(id);

            if (tehilim == null)
            {
                return NotFound(); // or return appropriate HTTP response for not found
            }

            return Ok(tehilim);
        }

        [HttpPost]
        public async Task<ActionResult> AddTehilim([FromBody] TehilimDTO tehilimDto)
        {
            await _tehilimBL.AddTehilimAsync(tehilimDto);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTehilim(int id, [FromBody] TehilimDTO updatedTehilimDto)
        {
            await _tehilimBL.UpdateTehilimAsync(id, updatedTehilimDto);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTehilim(int id)
        {
            await _tehilimBL.DeleteTehilimAsync(id);
            return Ok(); // or return appropriate HTTP response for success
        }
    }
}
