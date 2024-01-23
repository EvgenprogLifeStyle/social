import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { TextBlock, TextSize } from 'shared/ui/Text/Text';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailPage/model/services/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';

interface ArticleDetailCommentsProps {
    id:string
    className?: string
}

export const ArticleDetailComments = memo((props: ArticleDetailCommentsProps) => {
    const { t } = useTranslation();
    const { className, id } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            <TextBlock size={TextSize.L} title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
