import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import s from './ArticlesDetailPage.module.scss';

interface ArticlesDetailPageProps {
    className?: string
}

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(s.ArticlesDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticlesDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};
export default memo(ArticlesDetailPage);
