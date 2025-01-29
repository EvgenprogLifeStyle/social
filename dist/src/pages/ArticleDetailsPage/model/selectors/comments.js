export var getArticleCommentsIsLoading = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.isLoading;
};
export var getArticleCommentsError = function (state) {
    var _a, _b;
    return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) === null || _b === void 0 ? void 0 : _b.error;
};
