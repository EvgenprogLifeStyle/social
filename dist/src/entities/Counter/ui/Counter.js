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
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var t = useTranslation().t;
    var increment = function () {
        dispatch(counterActions.increment());
    };
    var decrement = function () {
        dispatch(counterActions.decrement());
    };
    return (_jsxs("div", { children: [_jsx("h1", __assign({ "data-testid": "value-title" }, { children: counterValue }), void 0), _jsx(Button, __assign({ onClick: increment, "data-testid": "increment-btn" }, { children: t('increment') }), void 0), _jsx(Button, __assign({ "data-testid": "decrement-btn", onClick: decrement }, { children: t('decrement') }), void 0)] }, void 0));
};
