import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import s from './ArticleItem.module.scss';

interface ArticleItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleItemSkeleton = memo((props: ArticleItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(s.ArticleItem, {}, [className, s[view]])}>
                <Card className={s.card}>
                    <div className={s.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={s.username} />
                        <Skeleton width={150} height={16} className={s.date} />
                    </div>
                    <Skeleton width="100%" height={24} className={s.title} />
                    <Skeleton width="100%" height={250} className={s.img} />
                    <div className={s.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(s.ArticleItem, {}, [className, s[view]])}>
            <Card className={s.card}>
                <div className={s.imageWrapper}>
                    <Skeleton width={200} height={200} className={s.img} />
                </div>
                <div className={s.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={s.title} />
            </Card>
        </div>
    );
});
