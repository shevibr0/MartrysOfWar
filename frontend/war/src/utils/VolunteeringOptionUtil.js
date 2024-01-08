import api from "../api";
//crud
const getVolunteeringOptions = async () => {
    return await api.get("VolunteeringOption").then(res => res.data)
}
const getVolunteeringOptionById = async (id) => {
    return await api.get(`VolunteeringOption/?id=${id}`).then(res => res.data)
}
const addVolunteeringOption = async (volunteeringOption) => {
    return await api.post("VolunteeringOption", volunteeringOption).then(res => res.data)
}
const updateVolunteeringOption = async (id, volunteeringOption) => {
    return await api.update(`VolunteeringOption/?id=${id}`, volunteeringOption).then(res => res.data)
}
const deleteVolunteeringOption = async (id) => {
    return await api.post(`VolunteeringOption/?id=${id}`).then(res => res.data)
}
export { getVolunteeringOptions, getVolunteeringOptionById, addVolunteeringOption, updateVolunteeringOption, deleteVolunteeringOption }