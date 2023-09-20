import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }:ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.ArticlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
