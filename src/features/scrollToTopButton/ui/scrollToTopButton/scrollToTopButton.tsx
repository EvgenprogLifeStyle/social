import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './scrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface scrollToTopButtonProps {
    className?: string
}

export const ScrollToTopButton = memo(({ className }: scrollToTopButtonProps) => {
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={CircleIcon}
            clickable
            onClick={onClick}
            width={32}
            height={32}
            className={classNames(s.scrollToTopButton, {}, [className])}
        />
    );
});
