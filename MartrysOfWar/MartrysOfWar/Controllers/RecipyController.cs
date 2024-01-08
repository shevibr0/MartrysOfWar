using BL;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MartrysOfWar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipyController : ControllerBase
    {
        // GET: api/<RecipyController>
        private IRecipyBL _recipyBL;
        public RecipyController(IRecipyBL recipyBL)
        {
            _recipyBL = recipyBL;
        }
        // GET: api/<PictureContoller>
        [HttpGet]
        public async Task<IEnumerable<RecipyDTO>> GetAllRecipies()
        {
            return await _recipyBL.GetAllRecipiesAsync();
        }


        // GET api/<PictureContoller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipyDTO>> GetRecipyById(int id)
        {
            var recipy = await _recipyBL.GetRecipyByIdAsync(id);

            if (recipy == null)
            {
                return NotFound(); // or return appropriate HTTP response for not found
            }

            return Ok(recipy);
        }

        // POST api/<PictureContoller>
        [HttpPost]
        public async Task<ActionResult> AddRecipy([FromBody] RecipyDTO recipyDTO)
        {
            await _recipyBL.AddRecipyAsync(recipyDTO);
            return Ok(); // or return appropriate HTTP response for success
        }

        // PUT api/<PictureContoller>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateRecipy(int id, [FromBody] RecipyDTO updatedRecipyDTO)
        {
            await _recipyBL.UpdateRecipyAsync(id, updatedRecipyDTO);
            return Ok(); // or return appropriate HTTP response for success
        }

        // DELETE api/<PictureContoller>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteRecipy(int id)
        {
            await _recipyBL.DeleteRecipyAsync(id);
            return Ok(); // or return appropriate HTTP response for success
        }
    }
}
