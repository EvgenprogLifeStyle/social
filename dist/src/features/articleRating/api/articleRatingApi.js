import { rtkApi } from '@/shared/api/rtkApi';
var articleRatingApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getArticleRating: build.query({
            query: function (_a) {
                var articleId = _a.articleId, userId = _a.userId;
                return ({
                    url: '/article-ratings',
                    params: {
                        userId: userId,
                        articleId: articleId,
                    },
                });
            },
        }),
        rateArticle: build.mutation({
            query: function (arg) { return ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }); },
        }),
    }); },
});
export var useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export var useRateArticle = articleRatingApi.useRateArticleMutation;
