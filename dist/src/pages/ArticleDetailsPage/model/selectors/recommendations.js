export var getArticleRecommendationsIsLoading = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) === null || _b === void 0 ? void 0 : _b.isLoading;
};
export var getArticleRecommendationsError = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) === null || _b === void 0 ? void 0 : _b.error;
};
