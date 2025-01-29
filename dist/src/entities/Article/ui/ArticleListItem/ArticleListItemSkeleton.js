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
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
export var ArticleListItemSkeleton = memo(function (props) {
    var className = props.className, view = props.view;
    if (view === ArticleView.BIG) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Skeleton, { border: "50%", height: 30, width: 30 }, void 0), _jsx(Skeleton, { width: 150, height: 16, className: cls.username }, void 0), _jsx(Skeleton, { width: 150, height: 16, className: cls.date }, void 0)] }), void 0), _jsx(Skeleton, { width: 250, height: 24, className: cls.title }, void 0), _jsx(Skeleton, { height: 200, className: cls.img }, void 0), _jsx("div", __assign({ className: cls.footer }, { children: _jsx(Skeleton, { height: 36, width: 200 }, void 0) }), void 0)] }), void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsx("div", __assign({ className: cls.imageWrapper }, { children: _jsx(Skeleton, { width: 200, height: 200, className: cls.img }, void 0) }), void 0), _jsx("div", __assign({ className: cls.infoWrapper }, { children: _jsx(Skeleton, { width: 130, height: 16 }, void 0) }), void 0), _jsx(Skeleton, { width: 150, height: 16, className: cls.title }, void 0)] }), void 0) }), void 0));
});
