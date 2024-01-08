﻿using DL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class UserDL : IUserDL
    {
        private MartyrsofwarContext _martyrsofwarContext = new MartyrsofwarContext();

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            try
            {
                return await _martyrsofwarContext.Users.ToListAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<User> GetUserByIdAsync(int id)
        {
            try
            {
                return await _martyrsofwarContext.Users.FindAsync(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<User> GetUserByNameAndEmailAsync(string name, string email)
        {
            try
            {
                // Assuming that 'Users' is the DbSet in your DbContext
                return await _martyrsofwarContext.Users
                    .FirstOrDefaultAsync(u => u.Name == name && u.Email == email);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task AddUserAsync(User user)
        {
            try
            {
                _martyrsofwarContext.Users.Add(user);
                await _martyrsofwarContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task UpdateUserAsync(int userId, User updatedUser)
        {
            try
            {
                var existingUser = await _martyrsofwarContext.Users.FindAsync(userId);

                if (existingUser != null)
                {
                    _martyrsofwarContext.Entry(existingUser).CurrentValues.SetValues(updatedUser);
                    await _martyrsofwarContext.SaveChangesAsync();
                }
                // Handle case where user with the specified ID is not found
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task DeleteUserAsync(int userId)
        {
            try
            {
                var userToDelete = await _martyrsofwarContext.Users.FindAsync(userId);

                if (userToDelete != null)
                {
                    _martyrsofwarContext.Users.Remove(userToDelete);
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
