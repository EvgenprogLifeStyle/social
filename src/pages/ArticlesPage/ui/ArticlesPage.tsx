import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { TextBlock, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ArticlePageFilter } from 'pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initActionPage } from '../model/services/initActionPage/initActionPage';
import {
    getArticlesListError,
    getArticlesListIsLoading,
    getArticlesListView,
} from '../model/selectors/articlePageSelectors';
import { articlePageSliceReducers, getArticles } from '../model/slices/articlePageSlice';
import s from './ArticlesPage.module.scss';

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

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitEffect(() => {
        dispatch(initActionPage(searchParams));
    });
    if (error) {
        return (
            <Page className={classNames('', {}, [className])}>
                <TextBlock text={error} theme={TextTheme.ERROR} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlePageFilter />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={s.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
