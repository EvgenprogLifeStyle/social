import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import React from 'react';
import {SidebarItemType} from 'widgets/Sidebar/model/items';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './SidebarItem.module.scss';
import {getUserAuthData} from 'entities/User';
import {useSelector} from 'react-redux';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = ({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation();

    const isAuth = useSelector(getUserAuthData)


    if (item.authOnly && !isAuth) {
        return null
    }
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(s.item, {[s.collapsed]: collapsed})}
        >
            <item.Icon className={s.icon}/>
            <span className={s.link}>
                {t(item.text)}
            </span>
        </AppLink>

    );
};
