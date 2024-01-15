import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import s from './ListBox.module.scss';

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}
type DropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    label?:string
    direction?:DropDownDirection
}

const ListBox = (props: ListBoxProps) => {
    const {
        items, className, value, defaultValue, onChange, readonly, label, direction = 'bottom',
    } = props;

    console.log(direction);

    return (
        <HStack gap="8">
            {label
                && <div className={s.label}>{`${label}>`}</div>}
            <HListBox
                as="div"
                className={classNames(s.ListBox, {}, [className])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <HListBox.Button className={s.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(s.options, {}, [s[direction]])}>
                    {items?.map((item) => (

                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(s.option, { [s.active]: active, [s.disabled]: item.disabled }, [])}
                                >
                                    {selected && '>'}
                                    {item.content}
                                </li>
                            )}

                        </HListBox.Option>

                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
export default ListBox;
