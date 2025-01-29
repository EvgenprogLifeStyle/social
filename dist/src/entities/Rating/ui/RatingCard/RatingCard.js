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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
export var RatingCard = memo(function (props) {
    var className = props.className, onAccept = props.onAccept, feedbackTitle = props.feedbackTitle, hasFeedback = props.hasFeedback, onCancel = props.onCancel, title = props.title, _a = props.rate, rate = _a === void 0 ? 0 : _a;
    var t = useTranslation().t;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = useState(rate), starsCount = _c[0], setStarsCount = _c[1];
    var _d = useState(''), feedback = _d[0], setFeedback = _d[1];
    var onSelectStars = useCallback(function (selectedStarsCount) {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        }
        else {
            onAccept === null || onAccept === void 0 ? void 0 : onAccept(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);
    var acceptHandle = useCallback(function () {
        setIsModalOpen(false);
        onAccept === null || onAccept === void 0 ? void 0 : onAccept(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);
    var cancelHandle = useCallback(function () {
        setIsModalOpen(false);
        onCancel === null || onCancel === void 0 ? void 0 : onCancel(starsCount);
    }, [onCancel, starsCount]);
    var modalContent = (_jsxs(_Fragment, { children: [_jsx(Text, { title: feedbackTitle }, void 0), _jsx(Input, { value: feedback, onChange: setFeedback, placeholder: t('Ваш отзыв') }, void 0)] }, void 0));
    return (_jsxs(Card, __assign({ className: className, max: true }, { children: [_jsxs(VStack, __assign({ align: "center", gap: "8", max: true }, { children: [_jsx(Text, { title: starsCount ? t('Спасибо за оценку!') : title }, void 0), _jsx(StarRating, { selectedStars: starsCount, size: 40, onSelect: onSelectStars }, void 0)] }), void 0), _jsx(BrowserView, { children: _jsx(Modal, __assign({ isOpen: isModalOpen, lazy: true }, { children: _jsxs(VStack, __assign({ max: true, gap: "32" }, { children: [modalContent, _jsxs(HStack, __assign({ max: true, gap: "16", justify: "end" }, { children: [_jsx(Button, __assign({ onClick: cancelHandle, theme: ButtonTheme.OUTLINE_RED }, { children: t('Закрыть') }), void 0), _jsx(Button, __assign({ onClick: acceptHandle }, { children: t('Отправить') }), void 0)] }), void 0)] }), void 0) }), void 0) }, void 0), _jsx(MobileView, { children: _jsx(Drawer, __assign({ isOpen: isModalOpen, lazy: true, onClose: cancelHandle }, { children: _jsxs(VStack, __assign({ gap: "32" }, { children: [modalContent, _jsx(Button, __assign({ fullWidth: true, onClick: acceptHandle, size: ButtonSize.L }, { children: t('Отправить') }), void 0)] }), void 0) }), void 0) }, void 0)] }), void 0));
});
