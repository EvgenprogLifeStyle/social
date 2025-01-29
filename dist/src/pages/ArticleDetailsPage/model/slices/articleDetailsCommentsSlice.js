import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId, } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentsAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; },
});
export var getArticleComments = commentsAdapter.getSelectors(function (state) { var _a; return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) || commentsAdapter.getInitialState(); });
var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
