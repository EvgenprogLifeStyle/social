import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { TextBlock } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import s from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(s.CommentList, {}, [className])}>
                <CommentCard isLoading className={s.comment} />
                <CommentCard isLoading className={s.comment} />
            </div>
        );
    }
    if (!comments) return null;

    return (
        <div className={classNames(s.CommentList, {}, [className])}>
            {comments?.length
                ? comments?.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} className={s.comment} comment={comment} />)
                : <TextBlock text={t('Комментарии отсутствуют')} />}

        </div>
    );
});
