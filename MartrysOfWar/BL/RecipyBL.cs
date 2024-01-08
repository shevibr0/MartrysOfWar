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
    public class RecipyBL : IRecipyBL
    {
        private IRecipyDL _recipyDL;
        private IMapper _mapper;
        public RecipyBL(IRecipyDL recipyDL, IMapper mapper)
        {
            _mapper = mapper;
            _recipyDL = recipyDL;
        }
        public async Task<IEnumerable<RecipyDTO>> GetAllRecipiesAsync()
        {
            var recipies = await _recipyDL.GetAllRecipiesAsync();
            return _mapper.Map<IEnumerable<RecipyDTO>>(recipies);
        }
        public async Task<RecipyDTO> GetRecipyByIdAsync(int id)
        {
            var recipy = await _recipyDL.GetRecipyByIdAsync(id);
            return _mapper.Map<RecipyDTO>(recipy);
        }
        public async Task AddRecipyAsync(RecipyDTO recipyDTO)
        {
            var recipy = _mapper.Map<Recipy>(recipyDTO);
            await _recipyDL.AddRecipyAsync(recipy);
        }
        public async Task UpdateRecipyAsync(int recipyId, RecipyDTO updatedRecipyDTO)
        {
            var updatedRecipy = _mapper.Map<Recipy>(updatedRecipyDTO);
            await _recipyDL.UpdateRecipyAsync(recipyId, updatedRecipy);
        }
        public async Task DeleteRecipyAsync(int recipyId)
        {
            await _recipyDL.DeleteRecipyAsync(recipyId);
        }
    }
}
