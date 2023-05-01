import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwicher } from 'widgets/ThemeSwicher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                123
            </Button>
            <div className={s.switchers}>
                <ThemeSwicher />
                <LangSwitcher className={s.lang} />
            </div>

        </div>
    );
};
