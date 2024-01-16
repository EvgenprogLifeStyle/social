import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './DropdownMenu.module.scss';

export interface DropdownMenuItem {
    disabled?: boolean
    content?: string
    onClick?: () => void
    href?: string
}

interface DropdownMenuProps {
    className?: string
    items: DropdownMenuItem[]
    trigger: ReactNode
    direction?: DropDownDirection

}
const mapDirectionClass:Record<DropDownDirection, string> = {
    'top left': s.topLeft,
    'top right': s.topRight,
    'bottom left': s.bottomLeft,
    'bottom right': s.bottomRight,
};

export const DropdownMenu = (props: DropdownMenuProps) => {
    const {
        className, items, trigger, direction = 'bottom left',
    } = props;
    return (
        <Menu as="div" className={classNames(s.DropdownMenu, {}, [className])}>
            <Menu.Button className={s.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(s.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item:DropdownMenuItem) => {
                    const content = ({ active }:{active:boolean}) => (
                        <button
                            key={item.content}
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(s.item, { [s.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
