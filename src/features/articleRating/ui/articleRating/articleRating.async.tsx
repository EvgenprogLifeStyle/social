import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { articleRatingProps } from './articleRating';

export const ArticleRatingLazy = lazy(
    () => import('./articleRating'),
);

export const ArticleRatingAsync = (props:articleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
