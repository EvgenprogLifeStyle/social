import { FC, ButtonHTMLAttributes } from 'react';
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
    square?:boolean,
    size?:ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(s.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
