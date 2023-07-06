import {createSlice} from '@reduxjs/toolkit';
import {ProfileSchema} from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // setAuthData: (state, action:PayloadAction<User>) => {
        //     state.authDate = action.payload;
        // },

    },
});

// Action creators are generated for each case reducer function
export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;
