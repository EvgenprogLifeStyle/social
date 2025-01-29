import { memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilter } from '../../lib/hooks/useArticleFilter';

interface ViewSelectorContainerProps {
    className?: string
}

export const ViewSelectorContainer = memo(({ className }: ViewSelectorContainerProps) => {
    const dispatch = useAppDispatch();
    const { view, onChangeView } = useArticleFilter();

    return (
        <ArticleViewSelector
            className={className}
            view={view}
            onViewClick={onChangeView}
        />
    );
});
