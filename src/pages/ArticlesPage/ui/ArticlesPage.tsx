import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { UserInitEffect } from 'shared/lib/hooks/userInitEffect/userInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { TextBlock, TextTheme } from 'shared/ui/Text/Text';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import {
    getArticlesListError,
    getArticlesListIsLoading,
    getArticlesListView,
} from '../model/selectors/articlePageSelectors';
import { articlePageSliceActions, articlePageSliceReducers, getArticles } from '../model/slices/articlePageSlice';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageSliceReducers,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesListIsLoading);
    const view = useSelector(getArticlesListView);
    const error = useSelector(getArticlesListError);
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageSliceActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    UserInitEffect(() => {
        dispatch(articlePageSliceActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });
    if (error) {
        return (
            <Page className={classNames('', {}, [className])}>
                <TextBlock text={error} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
