import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinksProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children?:ReactNode
}

export const AppLink = memo((props:AppLinksProps) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
