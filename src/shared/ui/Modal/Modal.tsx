import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import s from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);
    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
