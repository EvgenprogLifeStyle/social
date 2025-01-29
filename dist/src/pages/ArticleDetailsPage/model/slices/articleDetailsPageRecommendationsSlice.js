import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var getArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { var _a; return ((_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) || recommendationsAdapter.getInitialState(); });
var articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchArticleRecommendations.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articleDetailsPageRecommendationsReducer = articleDetailsPageRecommendationsSlice.reducer;
