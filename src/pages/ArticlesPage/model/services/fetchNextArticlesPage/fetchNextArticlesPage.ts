import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import {
    getArticlesListHasMore,
    getArticlesListIsLoading,
    getArticlesListPage,
} from '../../selectors/articlePageSelectors';
import { articlePageSliceActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { dispatch, getState } = thunkApi;
            const hasMore = getArticlesListHasMore(getState());
            const page = getArticlesListPage(getState());
            const isLoading = getArticlesListIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlePageSliceActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    // page: page + 1,
                }));
            }
        },
    );
