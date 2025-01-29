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
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList, } from '../../api/aritcleRecommendationsApi';
export var ArticleRecommendationsList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var _a = useArticleRecommendationsList(3), isLoading = _a.isLoading, articles = _a.data, error = _a.error;
    if (isLoading || error || !articles) {
        return null;
    }
    return (_jsxs(VStack, __assign({ gap: "8", className: classNames('', {}, [className]) }, { children: [_jsx(Text, { size: TextSize.L, title: t('Рекомендуем') }, void 0), _jsx(ArticleList, { articles: articles, target: "_blank" }, void 0)] }), void 0));
});
