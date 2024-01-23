import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import { ArticlePageFilter } from 'pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initActionPage } from '../model/services/initActionPage/initActionPage';
import { articlePageSliceReducers } from '../model/slices/articlePageSlice';
import s from './ArticlesPage.module.scss';
import { ArticleInfiniteList } from './ArticleInfinireList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlePage: articlePageSliceReducers,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitEffect(() => {
        dispatch(initActionPage(searchParams));
    });
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlePageFilter />
                <ArticleInfiniteList className={s.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
