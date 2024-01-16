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
    S = 'size_s',
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
type HeaderTag ='h1'|'h2'|'h3'

const mapSizeToHeaderTag:Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const TextBlock = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods:Mods = {
        [s[theme]]: true,
        [s[align]]: true,
        [s[size]]: true,
    };
    return (
        <div className={classNames(s.Text, mods, [className])}>
            {title && <HeaderTag className={s.title}>{title}</HeaderTag>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
