import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticlesDetailPage/model/selectors/article';
import { getArticleDetailsData } from 'entities/Article';
import s from './ArticlesDetailPageHeader.module.scss';

interface ArticlesDetailPageHeaderProps {
    className?: string
}

export const ArticlesDetailPageHeader = memo(({ className }: ArticlesDetailPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_detail}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(s.ArticlesDetailPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit
            && (
                <Button
                    className={s.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
