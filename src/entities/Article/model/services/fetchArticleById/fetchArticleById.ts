import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { ArticleSchema } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    ArticleSchema,
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get<ArticleSchema>(`/articles/${articleId}`);

                if (!response) { throw new Error(); }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
