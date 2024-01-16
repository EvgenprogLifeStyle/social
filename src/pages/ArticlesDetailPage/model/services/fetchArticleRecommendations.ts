import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { ArticleSchema } from 'entities/Article';
import {
    getArticlesListLimit,
    getArticlesListOrder,
    getArticlesListPage,
    getArticlesListSearch,
    getArticlesListSort,
    getArticlesListType,
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from 'entities/Article/model/types/article';

export const fetchArticleRecommendations = createAsyncThunk<ArticleSchema[],
    void,
    ThunkConfig<string>>(
        'articlesDetailsPage/fetchArticleRecommendations',
        async (props, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get<ArticleSchema[]>('/articles', {
                    params: {
                        _limit: 4,
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
