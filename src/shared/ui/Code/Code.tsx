import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import s from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
    className?: string;
    data: string
}

export const Code = memo((props: CodeProps) => {
    const { className, data } = props;
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(data);
    }, [data]);
    return (
        <pre className={classNames(s.Code, {}, [className])}>
            <Button className={s.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={s.copyIcon} />
            </Button>
            <code>
                {data}
            </code>
        </pre>

    );
});
