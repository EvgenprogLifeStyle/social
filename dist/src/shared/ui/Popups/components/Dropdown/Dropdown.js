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
import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
export function Dropdown(props) {
    var className = props.className, trigger = props.trigger, items = props.items, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a;
    var menuClasses = [mapDirectionClass[direction]];
    return (_jsxs(Menu, __assign({ as: "div", className: classNames(cls.Dropdown, {}, [className, popupCls.popup]) }, { children: [_jsx(Menu.Button, __assign({ className: popupCls.trigger }, { children: trigger }), void 0), _jsx(Menu.Items, __assign({ className: classNames(cls.menu, {}, menuClasses) }, { children: items.map(function (item, index) {
                    var content = function (_a) {
                        var _b;
                        var active = _a.active;
                        return (_jsx("button", __assign({ type: "button", disabled: item.disabled, onClick: item.onClick, className: classNames(cls.item, (_b = {}, _b[popupCls.active] = active, _b)) }, { children: item.content }), void 0));
                    };
                    if (item.href) {
                        return (_jsx(Menu.Item, __assign({ as: AppLink, to: item.href, disabled: item.disabled }, { children: content }), "dropdown-key-".concat(index)));
                    }
                    return (_jsx(Menu.Item, __assign({ as: Fragment, disabled: item.disabled }, { children: content }), "dropdown-key-".concat(index)));
                }) }), void 0)] }), void 0));
}
