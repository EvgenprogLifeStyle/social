import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleSortSelect, ArticleTypeTabs, ArticleViewSelector } from 'entities/Article';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import {
    getArticlesListOrder,
    getArticlesListSearch,
    getArticlesListSort,
    getArticlesListType,
    getArticlesListView,
} from '../../model/selectors/articlePageSelectors';
import { articlePageSliceActions } from '../../model/slices/articlePageSlice';
import s from './ArticlePageFilter.module.scss';

interface ArticlePageFilterProps {
    className?: string
}

export const ArticlePageFilter = memo(({ className }: ArticlePageFilterProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesListView);
    const sort = useSelector(getArticlesListSort);
    const order = useSelector(getArticlesListOrder);
    const search = useSelector(getArticlesListSearch);
    const type = useSelector(getArticlesListType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageSliceActions.setView(view));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageSliceActions.setSort(sort));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageSliceActions.setOrder(order));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageSliceActions.setSearch(search));
        dispatch(articlePageSliceActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageSliceActions.setType(value));
        dispatch(articlePageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(s.ArticlePageFilter, {}, [className])}>
            <div className={s.sortWrapper}>
                <ArticleSortSelect
                    sort={sort}
                    onChangeSort={onChangeSort}
                    order={order}
                    onChangeOrder={onChangeOrder}

                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />

            </div>
            <Card className={s.search}>
                <Input placeholder={t('Поиск')} value={search} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
