import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSchema } from 'entities/Article';
import { fetchArticleRecommendations } from 'pages/ArticlesDetailPage/model/services/fetchArticleRecommendations';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';

const recommendationsAdapter = createEntityAdapter<ArticleSchema>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
        isLoading: false,
        ids: [],
        error: undefined,
        entities: {},

    }),
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action: PayloadAction<ArticleSchema[]>,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsPageRecommendationReducers,
} = articleDetailsPageRecommendationSlice;
