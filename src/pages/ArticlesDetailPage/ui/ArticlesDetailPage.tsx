import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { TextBlock, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { getArticleRecommendationsIsLoading } from 'pages/ArticlesDetailPage/model/selectors/recomendations';
import { fetchArticleRecommendations } from 'pages/ArticlesDetailPage/model/services/fetchArticleRecommendations';
import { ArticlesDetailPageHeader } from 'pages/ArticlesDetailPage/ui/ArticlesDetailPageHeader/ArticlesDetailPageHeader';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import s from './ArticlesDetailPage.module.scss';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsCommentsReducers, getArticleComments } from '../model/slices/ArticleDetailsCommentsSlice';
import {
    articleDetailsPageRecommendationReducers,
    getArticleRecommendations,
} from '../model/slices/ArticleDetailsPageRecommendationSlice';

interface ArticlesDetailPageProps {
    className?: string
}

const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducers,
    articleDetailsRecommendations: articleDetailsPageRecommendationReducers,

};

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

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
                <ArticlesDetailPageHeader />
                <ArticleDetails id={id} />
                <TextBlock size={TextSize.L} title={t('Рекомендуем')} className={s.commentTitle} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={s.recommendations}
                    target="_blank"
                />
                <TextBlock size={TextSize.L} title={t('Комментарии')} className={s.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailPage);
