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
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './ErrorPage.module.scss';
export var ErrorPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var reloadPage = function () {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (_jsxs("div", __assign({ className: classNames(cls.ErrorPage, {}, [className]) }, { children: [_jsx("p", { children: t('Произошла непредвиденная ошибка') }, void 0), _jsx(Button, __assign({ onClick: reloadPage }, { children: t('Обновить страницу') }), void 0)] }), void 0));
};
