using DL.Models;

namespace DL
{
    public interface IUserDL
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int id);
        Task AddUserAsync(User user);
        Task UpdateUserAsync(int userId, User updatedUser);
        Task DeleteUserAsync(int userId);
    }
}