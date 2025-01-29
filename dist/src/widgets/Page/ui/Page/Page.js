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
import { memo, useRef, } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
export var PAGE_ID = 'PAGE_ID';
export var Page = memo(function (props) {
    var className = props.className, children = props.children, onScrollEnd = props.onScrollEnd;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getUIScrollByPath(state, pathname); });
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    var onScroll = useThrottle(function (e) {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    return (_jsxs("main", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]), onScroll: onScroll, id: PAGE_ID }, { children: [children, onScrollEnd ? _jsx("div", { className: cls.trigger, ref: triggerRef }, void 0) : null] }), void 0));
});
