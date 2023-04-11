import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import s from './Button.module.scss'
import {ButtonHTMLAttributes} from "react";

export enum ThemeButton{
    CLEAR='clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button className={classNames(s.Button, {}, [className,s[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
