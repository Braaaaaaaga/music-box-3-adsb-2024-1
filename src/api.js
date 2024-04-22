import axios from "axios";

const api = axios.create({
    baseURL: "https://661efdd816358961cd934b04.mockapi.io/musicas",
});

export default api;