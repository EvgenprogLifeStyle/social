import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleSchema } from '../types/article';
import { ArticleDetailSchema } from '../types/articleDetailSchema';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            // state.readonly = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (
                state,
                action:PayloadAction<ArticleSchema>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
