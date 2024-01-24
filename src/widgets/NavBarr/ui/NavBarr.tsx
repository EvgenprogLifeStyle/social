import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { TextBlock, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DropdownMenu } from 'shared/ui/DropdownMenu/DropdownMenu';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './NavBarr.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBarr = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    console.log(isAdminPanelAvailable);
    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <TextBlock className={cls.appName} title={t('Evgen')} theme={TextTheme.INVERTED} />
                <AppLink
                    to={RoutePath.articles_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <DropdownMenu
                    className={cls.dropdown}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Админка'),
                            href: RoutePath.admin_panel,
                        }] : []), {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ]}
                />
            </header>
        );
    }
    return (
        <header className={classNames(cls.navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
