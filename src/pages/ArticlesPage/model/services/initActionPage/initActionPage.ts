import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { getArticlesListInited } from '../../selectors/articlePageSelectors';
import { articlePageSliceActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList';

export const initActionPage = createAsyncThunk<void,
    void,
    ThunkConfig<string>>(
        'articlesPage/initActionPage',
        async (_, thunkApi) => {
            const { dispatch, getState } = thunkApi;
            const inited = getArticlesListInited(getState());

            if (!inited) {
                dispatch(articlePageSliceActions.initState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
