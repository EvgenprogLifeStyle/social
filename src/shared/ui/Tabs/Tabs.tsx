import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import s from './Tabs.module.scss';

export interface TabItem {
    value: string,
    content: ReactNode
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(s.Tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        key={tab.value}
                        onClick={clickHandler(tab)}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
});
