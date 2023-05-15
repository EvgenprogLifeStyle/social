import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>
                {t('Произошла ошибка ')}
            </p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу ')}
            </Button>

        </div>
    );
};
