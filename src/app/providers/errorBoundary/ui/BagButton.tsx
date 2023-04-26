import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования обработки ошибок
export const BagButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError((prev) => !prev);
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button
            onClick={onThrow}

        >
            {t('throw new Error')}
        </Button>

    );
};
