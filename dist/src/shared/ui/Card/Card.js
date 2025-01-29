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
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
export var CardTheme;
(function (CardTheme) {
    CardTheme["NORMAL"] = "normal";
    CardTheme["OUTLINED"] = "outlined";
})(CardTheme || (CardTheme = {}));
export var Card = memo(function (props) {
    var _a;
    var className = props.className, children = props.children, _b = props.theme, theme = _b === void 0 ? CardTheme.NORMAL : _b, max = props.max, otherProps = __rest(props, ["className", "children", "theme", "max"]);
    return (_jsx("div", __assign({ className: classNames(cls.Card, (_a = {}, _a[cls.max] = max, _a), [className, cls[theme]]) }, otherProps, { children: children }), void 0));
});
