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
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    if (authData) {
        return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Text, { className: cls.appName, title: t('Ulbi TV App'), theme: TextTheme.INVERTED }, void 0), _jsx(AppLink, __assign({ to: RoutePath.article_create, theme: AppLinkTheme.SECONDARY, className: cls.createBtn }, { children: t('Создать статью') }), void 0), _jsxs(HStack, __assign({ gap: "16", className: cls.actions }, { children: [_jsx(NotificationButton, {}, void 0), _jsx(AvatarDropdown, {}, void 0)] }), void 0)] }), void 0));
    }
    return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t('Войти') }), void 0), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0))] }), void 0));
});
