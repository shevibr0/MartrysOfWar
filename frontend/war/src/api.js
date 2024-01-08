import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:44303/api/",
    headers: {
        "Context-Type": "application/json"
    }
})
export default api;