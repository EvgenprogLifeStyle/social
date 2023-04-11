import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import s from './ThemeSwicher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarktIcon from 'shared/assets/icons/theme-dark.svg'
import PIcon from 'shared/assets/icons/p.png'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwicherProps {
    className?: string
}

export const ThemeSwicher = ({className}: ThemeSwicherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classNames(s.ThemeSwicher, {}, [className]))}
            onClick={toggleTheme}>{theme === Theme.DARK ? <LightIcon/> : <DarktIcon/>} </Button>
    );
};
