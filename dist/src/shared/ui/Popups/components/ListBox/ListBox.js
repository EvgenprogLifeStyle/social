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
import { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
export function ListBox(props) {
    var className = props.className, items = props.items, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, readonly = props.readonly, _a = props.direction, direction = _a === void 0 ? 'bottom right' : _a, label = props.label;
    var optionsClasses = [mapDirectionClass[direction]];
    return (_jsxs(HStack, __assign({ gap: "4" }, { children: [label && _jsx("span", { children: "".concat(label, ">") }, void 0), _jsxs(HListBox, __assign({ disabled: readonly, as: "div", className: classNames(cls.ListBox, {}, [className, popupCls.popup]), value: value, onChange: onChange }, { children: [_jsx(HListBox.Button, __assign({ disabled: readonly, className: cls.trigger }, { children: _jsx(Button, __assign({ disabled: readonly }, { children: value !== null && value !== void 0 ? value : defaultValue }), void 0) }), void 0), _jsx(HListBox.Options, __assign({ className: classNames(cls.options, {}, optionsClasses) }, { children: items === null || items === void 0 ? void 0 : items.map(function (item) { return (_jsx(HListBox.Option, __assign({ value: item.value, disabled: item.disabled, as: Fragment }, { children: function (_a) {
                                var _b;
                                var active = _a.active, selected = _a.selected;
                                return (_jsxs("li", __assign({ className: classNames(cls.item, (_b = {},
                                        _b[popupCls.active] = active,
                                        _b[popupCls.disabled] = item.disabled,
                                        _b)) }, { children: [selected && '!!!', item.content] }), void 0));
                            } }), item.value)); }) }), void 0)] }), void 0)] }), void 0));
}
