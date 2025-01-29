import { memo } from 'react';

import { useArticleFilter } from '../../lib/hooks/useArticleFilter';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FilterContainerProps {
    className?: string
}

export const FilterContainer = memo(({ className }: FilterContainerProps) => {
    const {
        onChangeSearch,
        search,
        onChangeType,
        onChangeSort,
        order,
        sort,
        type,
        onChangeOrder,
    } = useArticleFilter();
    return (
        <ArticlesFilters
            onChangeSearch={onChangeSearch}
            search={search}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
            order={order}
            sort={sort}
            type={type}
            onChangeOrder={onChangeOrder}
            className={className}
        />

    );
});
