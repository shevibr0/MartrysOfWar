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
    public class TehilimBL : ITehilimBL
    {

        private ITehilimDL _tehilimDL;
        private IMapper _mapper;

        public TehilimBL(ITehilimDL tehilimDL, IMapper mapper)
        {
            _mapper = mapper;
            _tehilimDL = tehilimDL;
        }

        public async Task<IEnumerable<TehilimDTO>> GetAllTehilimsAsync()
        {
            var tehilims = await _tehilimDL.GetAllTehilimsAsync();
            return _mapper.Map<IEnumerable<TehilimDTO>>(tehilims);
        }
        public async Task<TehilimDTO> GetTehilimByIdAsync(int id)
        {
            var tehilim = await _tehilimDL.GetTehilimByIdAsync(id);
            return _mapper.Map<TehilimDTO>(tehilim);
        }
        public async Task AddTehilimAsync(TehilimDTO tehilimDTO)
        {
            var tehilim = _mapper.Map<Tehilim>(tehilimDTO);
            await _tehilimDL.AddTehilimAsync(tehilim);
        }
        public async Task UpdateTehilimAsync(int tehilimId, TehilimDTO updatedTehilimDTO)
        {
            var updatedTehilim = _mapper.Map<Tehilim>(updatedTehilimDTO);
            await _tehilimDL.UpdateTehilimAsync(tehilimId, updatedTehilim);
        }
        public async Task DeleteTehilimAsync(int TehilimId)
        {
            await _tehilimDL.DeleteTehilimAsync(TehilimId);
        }
    }
}
