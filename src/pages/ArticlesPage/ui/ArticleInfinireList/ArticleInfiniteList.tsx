import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { TextBlock, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticlesListError,
    getArticlesListIsLoading,
    getArticlesListView,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfinireListProps {
    className?: string
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfinireListProps) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesListIsLoading);
    const view = useSelector(getArticlesListView);
    const error = useSelector(getArticlesListError);

    if (error) {
        return (
            <TextBlock text={error} theme={TextTheme.ERROR} />
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />

    );
});
