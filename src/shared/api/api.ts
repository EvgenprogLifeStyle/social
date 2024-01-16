import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorageVariable';

export const $api = axios.create({
    baseURL: __API__,
});

// отрабатывает перед запросом
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
