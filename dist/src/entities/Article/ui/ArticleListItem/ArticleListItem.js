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
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '@/shared/const/router';
export var ArticleListItem = memo(function (props) {
    var className = props.className, article = props.article, view = props.view, target = props.target;
    var t = useTranslation().t;
    var types = _jsx(Text, { text: article.type.join(', '), className: cls.types }, void 0);
    var views = (_jsxs(_Fragment, { children: [_jsx(Text, { text: String(article.views), className: cls.views }, void 0), _jsx(Icon, { Svg: EyeIcon }, void 0)] }, void 0));
    if (view === ArticleView.BIG) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsx("div", __assign({ className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx(Avatar, { size: 30, src: article.user.avatar }, void 0), _jsx(Text, { text: article.user.username, className: cls.username }, void 0), _jsx(Text, { text: article.createdAt, className: cls.date }, void 0)] }), void 0), _jsx(Text, { title: article.title, className: cls.title }, void 0), types, _jsx("img", { src: article.img, className: cls.img, alt: article.title }, void 0), textBlock && (_jsx(ArticleTextBlockComponent, { block: textBlock, className: cls.textBlock }, void 0)), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(AppLink, __assign({ target: target, to: RoutePath.article_details + article.id }, { children: _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE }, { children: t('Читать далее...') }), void 0) }), void 0), views] }), void 0)] }), void 0) }), void 0));
    }
    return (_jsx(AppLink, __assign({ target: target, to: RoutePath.article_details + article.id, className: classNames(cls.ArticleListItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ className: cls.card }, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [_jsx("img", { alt: article.title, src: article.img, className: cls.img }, void 0), _jsx(Text, { text: article.createdAt, className: cls.date }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] }), void 0), _jsx(Text, { text: article.title, className: cls.title }, void 0)] }), void 0) }), void 0));
});
