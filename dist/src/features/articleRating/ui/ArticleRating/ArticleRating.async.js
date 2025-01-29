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
import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
var ArticleRatingLazy = lazy(function () { return import('./ArticleRating'); });
export var ArticleRatingAsync = function (props) {
    return (_jsx(Suspense, __assign({ fallback: _jsx(Skeleton, { width: "100%", height: 140 }, void 0) }, { children: _jsx(ArticleRatingLazy, __assign({}, props), void 0) }), void 0));
};
