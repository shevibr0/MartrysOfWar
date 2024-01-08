import api from "../api";
//crud
const getUsers = async () => {
    return await api.get("User").then(res => res.data)
}
const getUserById = async (id) => {
    return await api.get(`User/?id=${id}`).then(res => res.data)
}
const addUser = async (user) => {
    return await api.post("User", user).then(res => res.data)
}
const updateUser = async (id, user) => {
    return await api.update(`User/?id=${id}`, user).then(res => res.data)
}
const deleteUser = async (id) => {
    return await api.post(`User/?id=${id}`).then(res => res.data)
}
const Login = async (name, password) => {
    return await api.post(`User/?name=${name}?password=${password}`, user).then(res => res.data)
}
export { getUsers, getUserById, addUser, updateUser, deleteUser, Login }