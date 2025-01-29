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
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
var ThemeProvider = function (props) {
    var initialTheme = props.initialTheme, children = props.children;
    var _a = useState(initialTheme || defaultTheme), theme = _a[0], setTheme = _a[1];
    var defaultProps = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme,
    }); }, [theme]);
    return (_jsx(ThemeContext.Provider, __assign({ value: defaultProps }, { children: children }), void 0));
};
export default ThemeProvider;
