import axios from 'axios';

export const Api = axios.create({
    withCredentials: true,
    baseURL: 'https://api.football-data.org/v2',
    headers: {
        "X-Auth-Token": process.env.VUE_APP_API_KEY,
    }
})