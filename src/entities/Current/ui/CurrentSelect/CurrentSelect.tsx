import {useTranslation} from 'react-i18next';
import {Select} from "shared/ui/Select/Select";
import {Current} from "../../model/types/currency";
import {ChangeEvent, memo, useCallback} from "react";

const options = [
    {value: Current.RUB, content: Current.RUB},
    {value: Current.EUR, content: Current.EUR},
    {value: Current.USD, content: Current.USD},
]

interface CurrentSelectProps {
    className?:string,
    value?: Current ,
    onChange?: (value: Current) => void,
    readonly?: boolean
}

export const CurrentSelect = memo((props: CurrentSelectProps) => {
    const {className,value, onChange, readonly} = props
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value:string)=>{
        onChange?.(value as Current)
    },[])
    return (
        <Select className={className}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})
