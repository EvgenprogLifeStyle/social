import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';
import { getArticlesListInited } from '../../selectors/articlePageSelectors';
import { articlePageSliceActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList';

export const initActionPage = createAsyncThunk<void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initActionPage',
        async (searchParams, thunkApi) => {
            const { dispatch, getState } = thunkApi;
            const inited = getArticlesListInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFromUrl) {
                    dispatch(articlePageSliceActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlePageSliceActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlePageSliceActions.setSearch(searchFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlePageSliceActions.setType(typeFromUrl));
                }

                dispatch(articlePageSliceActions.initState());
                dispatch(fetchArticlesList({
                // page: 1,
                }));
            }
        },
    );
