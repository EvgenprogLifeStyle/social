import React from 'react';
import { useTranslation } from 'react-i18next';
import { BagButton } from 'app/providers/errorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <div>
                <BagButton />
                {t('Главная')}
            </div>
        </div>
    );
};

export default MainPage;
