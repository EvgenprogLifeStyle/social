import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { TextBlock } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { UserInitEffect } from 'shared/lib/hooks/userInitEffect/userInitEffect';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailPage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import s from './ArticlesDetailPage.module.scss';
import { articleDetailsCommentsReducers, getArticleComments } from '../model/services/ArticleDetailsCommentsSlice';
import { getArticleCommentIsLoading } from '../model/selectors/comments';

interface ArticlesDetailPageProps {
    className?: string
}

const reducer: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducers,
};

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentIsLoading);
    const dispatch = useAppDispatch();
    console.log(commentsIsLoading);
    UserInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(s.ArticlesDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(s.ArticlesDetailPage, {}, [className])}>
                <ArticleDetails id={id} />
                <TextBlock title={t('Комментарии')} className={s.commentTitle} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default memo(ArticlesDetailPage);
