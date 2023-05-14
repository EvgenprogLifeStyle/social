import
React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            {/* <div className={cls.links}> */}
            {/*        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}> */}
            {/*            {t('Главная')} */}
            {/*        </AppLink> */}
            {/*        <AppLink to="/about">{t('О сайте')}</AppLink> */}
            {/*    </div> */}
        </div>
    );
};
