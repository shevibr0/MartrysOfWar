import api from "../api";
//crud
const getSoldiers = async (page) => {
    return await api.get(`Soldier/GetSolidersByPage?page=${page}`).then(res => res.data)
}
const GetCountSoliders = () => {
    return api.get('Soldier/GetCountSoliders').then(res => res.data)
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

const globalSearchSoldiers = async (searchValue) => {
    return await api.get(`Soldier/GlobalSearchSoldiers?searchValue=${searchValue}`).then(res => res.data)
}
export { getSoldiers, GetCountSoliders, getSoldiersById, addSoldier, updateSoldier, deleteSoldier, globalSearchSoldiers }