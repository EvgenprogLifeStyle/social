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
import { memo, useCallback, useEffect, } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
var height = window.innerHeight - 100;
export var DrawerContent = memo(function (props) {
    var _a = useAnimationLibs(), Spring = _a.Spring, Gesture = _a.Gesture;
    var _b = Spring.useSpring(function () { return ({ y: height }); }), y = _b[0].y, api = _b[1];
    var theme = useTheme().theme;
    var className = props.className, children = props.children, onClose = props.onClose, isOpen = props.isOpen, lazy = props.lazy;
    var openDrawer = useCallback(function () {
        api.start({ y: 0, immediate: false });
    }, [api]);
    useEffect(function () {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);
    var close = function (velocity) {
        if (velocity === void 0) { velocity = 0; }
        api.start({
            y: height,
            immediate: false,
            config: __assign(__assign({}, Spring.config.stiff), { velocity: velocity }),
            onResolve: onClose,
        });
    };
    var bind = Gesture.useDrag(function (_a) {
        var last = _a.last, _b = _a.velocity, vy = _b[1], _c = _a.direction, dy = _c[1], _d = _a.movement, my = _d[1], cancel = _a.cancel;
        if (my < -70)
            cancel();
        if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                close();
            }
            else {
                openDrawer();
            }
        }
        else {
            api.start({ y: my, immediate: true });
        }
    }, {
        from: function () { return [0, y.get()]; }, filterTaps: true, bounds: { top: 0 }, rubberband: true,
    });
    if (!isOpen) {
        return null;
    }
    var display = y.to(function (py) { return (py < height ? 'block' : 'none'); });
    return (_jsx(Portal, { children: _jsxs("div", __assign({ className: classNames(cls.Drawer, {}, [className, theme, 'app_drawer']) }, { children: [_jsx(Overlay, { onClick: close }, void 0), _jsx(Spring.a.div, __assign({ className: cls.sheet, style: { display: display, bottom: "calc(-100vh + ".concat(height - 100, "px)"), y: y } }, bind(), { children: children }), void 0)] }), void 0) }, void 0));
});
var DrawerAsync = function (props) {
    var isLoaded = useAnimationLibs().isLoaded;
    if (!isLoaded) {
        return null;
    }
    return _jsx(DrawerContent, __assign({}, props), void 0);
};
export var Drawer = function (props) {
    return (_jsx(AnimationProvider, { children: _jsx(DrawerAsync, __assign({}, props), void 0) }, void 0));
};
