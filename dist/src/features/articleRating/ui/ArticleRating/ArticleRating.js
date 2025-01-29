import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
var ArticleRating = memo(function (props) {
    var _a;
    var className = props.className, articleId = props.articleId;
    var t = useTranslation().t;
    var userData = useSelector(getUserAuthData);
    var _b = useGetArticleRating({
        articleId: articleId,
        userId: (_a = userData === null || userData === void 0 ? void 0 : userData.id) !== null && _a !== void 0 ? _a : '',
    }), data = _b.data, isLoading = _b.isLoading;
    var rateArticleMutation = useRateArticle()[0];
    var handleRateArticle = useCallback(function (starsCount, feedback) {
        var _a;
        try {
            rateArticleMutation({
                userId: (_a = userData === null || userData === void 0 ? void 0 : userData.id) !== null && _a !== void 0 ? _a : '',
                articleId: articleId,
                rate: starsCount,
                feedback: feedback,
            });
        }
        catch (e) {
            // handle error
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData === null || userData === void 0 ? void 0 : userData.id]);
    var onAccept = useCallback(function (starsCount, feedback) {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);
    var onCancel = useCallback(function (starsCount) {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);
    if (isLoading) {
        return _jsx(Skeleton, { width: "100%", height: 120 }, void 0);
    }
    var rating = data === null || data === void 0 ? void 0 : data[0];
    return (_jsx(RatingCard, { onCancel: onCancel, onAccept: onAccept, rate: rating === null || rating === void 0 ? void 0 : rating.rate, className: className, title: t('Оцените статью'), feedbackTitle: t('Оставьте свой отзыв о статье, это поможет улучшить качество'), hasFeedback: true }, void 0));
});
export default ArticleRating;
