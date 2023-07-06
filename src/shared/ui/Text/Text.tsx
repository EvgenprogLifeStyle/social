import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './Text.module.scss';
import {memo} from "react";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme
}

export const TextBlock = memo((props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(s.Text, { [s[theme]]: true }, [className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});
