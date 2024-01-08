﻿using AutoMapper;
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
    public class SoldierBL : ISoldierBL
    {
        private ISoldierDL _soldierDL;
        private IMapper _mapper;

        public SoldierBL(ISoldierDL soldierDL, IMapper mapper)
        {
            _mapper = mapper;
            _soldierDL = soldierDL;
        }

        public async Task<IEnumerable<SoldierDTO>> GetAllSoldiersAsync()
        {
            var soldiers = await _soldierDL.GetAllSoldiersAsync();
            return _mapper.Map<IEnumerable<SoldierDTO>>(soldiers);
        }
        public async Task<SoldierDTO> GetSoldierByIdAsync(int id)
        {
            var soldier = await _soldierDL.GetSoldierByIdAsync(id);
            return _mapper.Map<SoldierDTO>(soldier);
        }
        public async Task AddSoldierAsync(SoldierDTO soldierDTO)
        {
            var soldier = _mapper.Map<Soldier>(soldierDTO);
            await _soldierDL.AddSoldierAsync(soldier);
        }
        public async Task UpdateSoldierAsync(int soldierId, SoldierDTO updatedSoldierDTO)
        {
            var updatedSoldier = _mapper.Map<Soldier>(updatedSoldierDTO);
            await _soldierDL.UpdateSoldierAsync(soldierId, updatedSoldier);
        }
        public async Task DeleteSoldierAsync(int soldierId)
        {
            await _soldierDL.DeleteSoldierAsync(soldierId);
        }

    }
}