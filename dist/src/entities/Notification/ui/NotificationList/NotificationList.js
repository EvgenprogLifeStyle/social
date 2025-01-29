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
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';
export var NotificationList = memo(function (props) {
    var className = props.className;
    var _a = useNotifications(null, {
        pollingInterval: 10000,
    }), data = _a.data, isLoading = _a.isLoading;
    if (isLoading) {
        return (_jsxs(VStack, __assign({ gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]) }, { children: [_jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }, void 0), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }, void 0), _jsx(Skeleton, { width: "100%", border: "8px", height: "80px" }, void 0)] }), void 0));
    }
    return (_jsx(VStack, __assign({ gap: "16", max: true, className: classNames(cls.NotificationList, {}, [className]) }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) { return (_jsx(NotificationItem, { item: item }, item.id)); }) }), void 0));
});
