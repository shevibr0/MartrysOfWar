using Entities.DTO;

namespace BL
{
    public interface IUserBL
    {
        Task<IEnumerable<UserDTO>> GetAllUsersAsync();
        Task<UserDTO> GetUserByIdAsync(int id);
        Task AddUserAsync(UserDTO userDTO);
        Task UpdateUserAsync(int userId, UserDTO updatedUserDTO);
        Task DeleteUserAsync(int userId);


        }
}