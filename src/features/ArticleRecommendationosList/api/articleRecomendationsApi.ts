import { rtkApi } from 'shared/api/rtkApi';
import { ArticleSchema } from 'entities/Article';

const recomendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecomendationsList: build.query<ArticleSchema[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecomendationsListQuery } = recomendationsApi;
