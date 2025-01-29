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
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
var ArticleEditPage = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var isEdit = Boolean(id);
    return (_jsx(Page, __assign({ className: classNames(cls.ArticleEditPage, {}, [className]) }, { children: isEdit
            ? t('Редактирование статьи с ID = ') + id
            : t('Создание новой статьи') }), void 0));
});
export default ArticleEditPage;
