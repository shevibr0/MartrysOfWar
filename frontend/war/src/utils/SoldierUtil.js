import api from "../api";
//crud
const getSoldiers = async (page) => {
    return await api.get(`Soldier?page=${page}`).then(res => res.data)
}
const getSoldiersById = async (id) => {
    return await api.get(`Soldier/?id=${id}`).then(res => res.data)
}
const addSoldier = async (soldier) => {
    return await api.post("Soldier", soldier).then(res => res.data)
}
const updateSoldier = async (id, soldier) => {
    return await api.update(`Soldier/?id=${id}`, soldier).then(res => res.data)
}
const deleteSoldier = async (id) => {
    return await api.post(`Soldier/?id=${id}`).then(res => res.data)
}
export { getSoldiers, getSoldiersById, addSoldier, updateSoldier, deleteSoldier }