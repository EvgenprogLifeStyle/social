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
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var sidebarItemsList = useSelector(getSidebarItems);
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var itemsList = useMemo(function () { return sidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed, sidebarItemsList]);
    return (_jsxs("aside", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapseBtn, theme: ButtonTheme.BACKGROUND_INVERTED, size: ButtonSize.L, square: true }, { children: collapsed ? '>' : '<' }), void 0), _jsx(VStack, __assign({ role: "navigation", gap: "8", className: cls.items }, { children: itemsList }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { short: collapsed, className: cls.lang }, void 0)] }), void 0)] }), void 0));
});
