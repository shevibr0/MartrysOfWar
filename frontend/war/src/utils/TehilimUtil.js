import api from "../api";
//crud
const getTehilim = async () => {
    return await api.get("Tehilim").then(res => res.data)
}
const getTehilimById = async (id) => {
    return await api.get(`Tehilim/?id=${id}`).then(res => res.data)
}
const addTehilim = async (tehilim) => {
    return await api.post("Tehilim", tehilim).then(res => res.data)
}
const updateTehilim = async (id, tehilim) => {
    return await api.update(`Tehilim/?id=${id}`, tehilim).then(res => res.data)
}
const deleteTehilim = async (id) => {
    return await api.post(`Tehilim/?id=${id}`).then(res => res.data)
}
export { getTehilim, getTehilimById, addTehilim, updateTehilim, deleteTehilim }