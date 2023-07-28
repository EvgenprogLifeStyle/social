import {ChangeEvent, memo, useMemo,} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {className, label, options, value, onChange, readonly} = props;

    const optionsList = useMemo(() => options?.map((opt) =>
                <option className={s.option} value={opt.value} key={opt.value}>{opt.content}</option>
             )
        , [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChange)
        onChange(e.target.value)
    }
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
});
