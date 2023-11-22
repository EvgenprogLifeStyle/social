import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { getScrollSaveByPath, ScrollSaveActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useTrotling/useThrottle';
import s from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?:()=>void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollTop = useSelector((state:StateSchema) => getScrollSaveByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    useInitEffect(() => {
        wrapperRef.current.scrollTop = scrollTop;
    });

    const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
        dispatch(ScrollSaveActions.setScrollPosition({
            path: pathname,
            positionTop: e.currentTarget.scrollTop,
        }));
    }, 100);
    return (
        <section
            ref={wrapperRef}
            className={classNames(s.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div ref={triggerRef} className={s.trigger} /> : null }
        </section>
    );
});
