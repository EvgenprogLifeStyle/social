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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
export var AppLinkTheme;
(function (AppLinkTheme) {
    AppLinkTheme["PRIMARY"] = "primary";
    AppLinkTheme["SECONDARY"] = "secondary";
    AppLinkTheme["RED"] = "red";
})(AppLinkTheme || (AppLinkTheme = {}));
export var AppLink = memo(function (props) {
    var _a;
    var to = props.to, className = props.className, children = props.children, _b = props.theme, theme = _b === void 0 ? AppLinkTheme.PRIMARY : _b, otherProps = __rest(props, ["to", "className", "children", "theme"]);
    return (_jsx(Link, __assign({ to: to, className: classNames(cls.AppLink, (_a = {}, _a[cls[theme]] = true, _a), [className]) }, otherProps, { children: children }), void 0));
});
