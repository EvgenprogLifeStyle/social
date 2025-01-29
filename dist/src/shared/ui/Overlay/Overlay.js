import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';
export var Overlay = memo(function (props) {
    var className = props.className, onClick = props.onClick;
    return (_jsx("div", { onClick: onClick, className: classNames(cls.Overlay, {}, [className]) }, void 0));
});
