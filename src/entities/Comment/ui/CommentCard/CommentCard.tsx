import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { TextBlock } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(s.CommentCard, {}, [className])}>
                <div className={s.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={15} width={100} className={s.username} />
                </div>
                <Skeleton height={50} width="100%" className={s.text} />
            </VStack>
        );
    }
    return (
        <VStack gap="8" max className={classNames(s.CommentCard, {}, [className])}>
            <AppLink className={s.header} to={`${RoutePath.profile}${comment?.user.id}`}>
                {comment?.user?.avatar && <Avatar size={30} src={comment.user?.avatar} />}
                <TextBlock className={s.username} title={comment?.user.username} />
            </AppLink>
            <TextBlock className={s.text} text={comment?.text} />
        </VStack>
    );
});
