import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'shared/ui/Page/Page';
import { ArticlesDetailPageHeader } from 'pages/ArticlesDetailPage/ui/ArticlesDetailPageHeader/ArticlesDetailPageHeader';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecomendationsList } from 'features/ArticleRecommendationosList';
import { ArticleDetailComments } from 'pages/ArticlesDetailPage/ui/ArticleDetailComments/ArticleDetailComments';
import s from './ArticlesDetailPage.module.scss';
import { articleDetailsCommentsReducers } from '../model/slices/ArticleDetailsCommentsSlice';

interface ArticlesDetailPageProps {
    className?: string
}

const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducers,

};

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
        <DynamicModuleLoader reducers={reducer}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ArticlesDetailPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecomendationsList />
                    <ArticleDetailComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailPage);
