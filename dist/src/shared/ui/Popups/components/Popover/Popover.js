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
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
export function Popover(props) {
    var className = props.className, trigger = props.trigger, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a, children = props.children;
    var menuClasses = [mapDirectionClass[direction]];
    return (_jsxs(HPopover, __assign({ className: classNames(cls.Popover, {}, [className, popupCls.popup]) }, { children: [_jsx(HPopover.Button, __assign({ as: "div", className: popupCls.trigger }, { children: trigger }), void 0), _jsx(HPopover.Panel, __assign({ className: classNames(cls.panel, {}, menuClasses) }, { children: children }), void 0)] }), void 0));
}
