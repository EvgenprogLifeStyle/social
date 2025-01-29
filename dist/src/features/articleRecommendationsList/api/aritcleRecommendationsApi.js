import { rtkApi } from '@/shared/api/rtkApi';
var recommendationsApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRecommendationsList: build.query({
            query: function (limit) { return ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }); },
        }),
    }); },
});
export var useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
