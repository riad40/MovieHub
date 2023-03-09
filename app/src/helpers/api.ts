import axios, { AxiosInstance } from 'axios'
import API_KEY from '../../enviroment'

const apiUrl = 'https://api.themoviedb.org/3/'

const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
})

export default api
