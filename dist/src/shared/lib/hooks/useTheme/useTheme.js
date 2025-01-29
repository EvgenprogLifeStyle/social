import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.LIGHT,
        toggleTheme: toggleTheme,
    };
}
