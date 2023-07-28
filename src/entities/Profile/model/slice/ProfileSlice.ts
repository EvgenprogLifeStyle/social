import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProfileData} from 'entities/Profile';
import {Profile, ProfileSchema} from '../types/profile';
import {updateProfileDate} from "../services/updateProfileDate/updateProfileDate";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit:(state) => {
            state.readonly = true;
            state.form = state.data
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form, ...action.payload,
            };
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action:PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileDate.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileDate.fulfilled, (
                state,
                action:PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileDate.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
