import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { TextBlock } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { t } = useTranslation();
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(s.CommentCard, {}, [className])}>
                <div className={s.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={15} width={100} className={s.username} />
                </div>
                <Skeleton height={50} width="100%" className={s.text} />
            </div>
        );
    }
    return (
        <div className={classNames(s.CommentCard, {}, [className])}>
            <div className={s.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user?.avatar} />}
                <TextBlock className={s.username} title={comment.user.username} />
            </div>
            <TextBlock className={s.text} text={comment.text} />
        </div>
    );
});
