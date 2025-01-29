var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRating } from '@/features/articleRating';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (props) {
    var className = props.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    if (!id) {
        return null;
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: "16", max: true }, { children: [_jsx(ArticleDetailsPageHeader, {}, void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(ArticleRating, { articleId: id }, void 0), _jsx(ArticleRecommendationsList, {}, void 0), _jsx(ArticleDetailsComments, { id: id }, void 0)] }), void 0) }), void 0) }), void 0));
};
export default memo(ArticleDetailsPage);
