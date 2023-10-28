import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { ArticleSchema } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticlesListLimit } from 'pages/ArticlesPage/model/selectors/articlePageSelectors';

interface FetchArticlesListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<ArticleSchema[],
    FetchArticlesListProps,
    ThunkConfig<string>>(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const { page = 1 } = props;
            const limit = getArticlesListLimit(getState());
            try {
                const response = await extra.api.get<ArticleSchema[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
