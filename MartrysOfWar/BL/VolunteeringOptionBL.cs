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
    public class VolunteeringOptionBL : IVolunteeringOptionBL
    {
        private IVolunteeringOptionDL _volunteeringOptionDL;
        private IMapper _mapper;
        public VolunteeringOptionBL(IVolunteeringOptionDL volunteeringOptionDL, IMapper mapper)
        {
            _mapper = mapper;
            _volunteeringOptionDL = volunteeringOptionDL;
        }
        public async Task<IEnumerable<VolunteeringOptionDTO>> GetAllVolunteeringOptionsAsync()
        {
            var volunteeringOptions = await _volunteeringOptionDL.GetAllVolunteeringOptionsAsync();
            return _mapper.Map<IEnumerable<VolunteeringOptionDTO>>(volunteeringOptions);
        }
        public async Task<VolunteeringOptionDTO> GetVolunteeringOptionByIdAsync(int id)
        {
            var volunteeringOption = await _volunteeringOptionDL.GetVolunteeringOptionByIdAsync(id);
            return _mapper.Map<VolunteeringOptionDTO>(volunteeringOption);
        }
        public async Task AddVolunteeringOptionAsync(VolunteeringOptionDTO volunteeringOptionDTO)
        {
            var volunteeringOption = _mapper.Map<VolunteeringOption>(volunteeringOptionDTO);
            await _volunteeringOptionDL.AddVolunteeringOptionAsync(volunteeringOption);
        }
        public async Task UpdateVolunteeringOptionAsync(int volunteeringOptionId, VolunteeringOptionDTO updatedVolunteeringOptionDTO)
        {
            var updatedVolunteeringOption = _mapper.Map<VolunteeringOption>(updatedVolunteeringOptionDTO);
            await _volunteeringOptionDL.UpdateVolunteeringOptionAsync(volunteeringOptionId, updatedVolunteeringOption);
        }
        public async Task DeleteVolunteeringOptionAsync(int volunteeringOptionId)
        {
            await _volunteeringOptionDL.DeleteVolunteeringOptionAsync(volunteeringOptionId);
        }
    }
}
