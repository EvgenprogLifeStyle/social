import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';
export var getCanEditArticle = createSelector(getArticleDetailsData, getUserAuthData, function (article, user) {
    if (!article || !user) {
        return false;
    }
    return article.user.id === user.id;
});
