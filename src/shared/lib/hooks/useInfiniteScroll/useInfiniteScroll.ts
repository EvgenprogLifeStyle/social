import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ triggerRef, wrapperRef, callback }: UseInfiniteScrollOptions) {
    useEffect(() => {
        const WrapperElement = wrapperRef.current;
        const TriggerElement = triggerRef.current;
        let observer:IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: WrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(TriggerElement);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (observer && TriggerElement) observer.unobserve(TriggerElement);
        };
    }, [callback, triggerRef, wrapperRef]);
}
