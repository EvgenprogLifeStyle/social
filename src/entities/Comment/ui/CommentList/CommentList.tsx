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
    return (
        <div className={classNames(s.CommentList, {}, [className])}>
            {comments?.length
                ? comments?.map((comment) => <CommentCard className={s.comment} comment={comment} />)
                : <TextBlock text={t('Комментарии отсутствуют')} />}

        </div>
    );
});
