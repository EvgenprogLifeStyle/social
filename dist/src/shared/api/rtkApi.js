import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
export var rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: function (headers) {
            var token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: function (builder) { return ({}); },
});
