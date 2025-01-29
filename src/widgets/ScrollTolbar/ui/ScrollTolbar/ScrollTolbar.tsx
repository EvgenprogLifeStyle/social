import {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import s from './ScrollTolbar.module.scss';
import {VStack} from '@/shared/ui/redesigned/Stack';

interface ScrollTolbarProps {
    className?: string
}

export const ScrollTolbar = memo(({ className }: ScrollTolbarProps) => {

    return (
        <VStack justify="center" align="center" max className={classNames(s.ScrollTolbar, {}, [className])}>
            <ScrollTolbar />
        </VStack>
    );
});
