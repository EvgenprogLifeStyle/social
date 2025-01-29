import { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './MainLayouts.module.scss';

interface MainLayoutsProps {
    className?: string,
    header: ReactElement,
    content: ReactElement,
    sidebar: ReactElement,
    toolbar?: ReactElement
}

export const MainLayouts = memo((props: MainLayoutsProps) => {
    const {
        content, header, toolbar, sidebar, className,
    } = props;
    return (
        <div className={classNames(s.MainLayouts, {}, [className])}>
            <div className={s.sidebar}>{sidebar}</div>
            <div className={s.content}>{content}</div>
            <div className={s.rightbar}>
                <div className={s.header}>{header}</div>
                <div className={s.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
});
