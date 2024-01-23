import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorageVariable';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
