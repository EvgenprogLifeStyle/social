import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
export var $api = axios.create({
    baseURL: __API__,
});
$api.interceptors.request.use(function (config) {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
