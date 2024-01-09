﻿using BL;
using DL.Models;
using Entities.DTO;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MartrysOfWar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserBL _userBL;
        public UserController(IUserBL userBL)
        {
                _userBL = userBL;
        }

        [HttpGet]
public async Task<IEnumerable<UserDTO>> GetAllUsers()
{
    return await _userBL.GetAllUsersAsync();
}

        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetUserById(int id)
        {
            var user = await _userBL.GetUserByIdAsync(id);

            if (user == null)
            {
                return NotFound(); // or return appropriate HTTP response for not found
            }

            return Ok(user);
        }
        [HttpGet("{name}/{email}")]
        public async Task<ActionResult<UserDTO>> GetUserByNameAndEmail(string name, string email)
        {
            var userDTO = await _userBL.GetUserByNameAndEmailAsync(name, email);

            if (userDTO == null)
            {
                return NotFound(); // or return appropriate HTTP response for not found
            }

            return Ok(userDTO);
        }
        [HttpPost]
        public async Task<ActionResult> AddUser([FromBody] UserDTO userDTO)
        {
            await _userBL.AddUserAsync(userDTO);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(int id, [FromBody] UserDTO updatedUserDTO)
        {
            await _userBL.UpdateUserAsync(id, updatedUserDTO);
            return Ok(); // or return appropriate HTTP response for success
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            await _userBL.DeleteUserAsync(id);
            return Ok(); // or return appropriate HTTP response for success
        }
    }
}
