import {FC, ButtonHTMLAttributes, memo, ReactNode} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'

}
export enum ButtonSize{
    M='size_m',
    L='size_l',
    XL='size_xl'
 }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children?: ReactNode
}

export const Button = memo((props:ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(s.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
