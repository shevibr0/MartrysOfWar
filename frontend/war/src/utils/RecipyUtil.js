import api from "../api";
//crud
const getRecipy = async () => {
    return await api.get("Recipy").then(res => res.data)
}
const getRecipyById = async (id) => {
    return await api.get(`Recipy/?id=${id}`).then(res => res.data)
}
const addRecipy = async (recipy) => {
    return await api.post("Recipy", recipy).then(res => res.data)
}
const updateRecipy = async (id, recipy) => {
    return await api.update(`Recipy/?id=${id}`, recipy).then(res => res.data)
}
const deleteRecipy = async (id) => {
    return await api.post(`Recipy/?id=${id}`).then(res => res.data)
}
export { getRecipy, getRecipyById, addRecipy, updateRecipy, deleteRecipy }