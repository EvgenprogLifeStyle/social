import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const closeHandler = () => {
        if (onClose) onClose();
    };
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
    };

    return (
        <div className={classNames(s.Modal, mods, [className])}>
            <div className={s.overlay} onClick={closeHandler}>
                <div className={s.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
