import api from "../api";
//crud
const getMemories = async () => {
    return await api.get("Memory").then(res => res.data)
}
const getMemoriesById = async (id) => {
    return await api.get(`Memory/?id=${id}`).then(res => res.data)
}
const addMemory = async (memory) => {
    return await api.post("Memory", memory).then(res => res.data)
}
const updateMemory = async (id, memory) => {
    return await api.update(`Memory/?id=${id}`, memory).then(res => res.data)
}
const deleteMemory = async (id) => {
    return await api.post(`Memory/?id=${id}`).then(res => res.data)
}
export { getMemories, getMemoriesById, addMemory, updateMemory, deleteMemory }