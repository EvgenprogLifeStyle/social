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

interface FetchArticlesListProps {
replace?:boolean
}

export const fetchArticlesList = createAsyncThunk<ArticleSchema[],
    FetchArticlesListProps,
    ThunkConfig<string>>(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            // const { page = 1 } = props;
            const limit = getArticlesListLimit(getState());

            const sort = getArticlesListSort(getState());
            const order = getArticlesListOrder(getState());
            const search = getArticlesListSearch(getState());
            const page = getArticlesListPage(getState());
            const type = getArticlesListType(getState());
            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<ArticleSchema[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        type: type === ArticleType.ALL ? undefined : type,
                        q: search,
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
