import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}
export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign
    size?: TextSize
}

export const TextBlock = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods:Mods = {
        [s[theme]]: true,
        [s[align]]: true,
        [s[size]]: true,
    };
    return (
        <div className={classNames(s.Text, mods, [className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
