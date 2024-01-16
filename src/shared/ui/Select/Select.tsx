import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;

    const optionsList = useMemo(
        () => options?.map((opt) => <option className={s.option} value={opt.value} key={opt.value}>{opt.content}</option>),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value as T);
    };
    const mods: Mods = {};

    return (
        <div className={classNames(s.Wrapper, mods, [className])}>
            {label
                && (
                    <span className={s.label}>
                        {`${label}>`}
                    </span>
                )}
            <select
                className={s.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
