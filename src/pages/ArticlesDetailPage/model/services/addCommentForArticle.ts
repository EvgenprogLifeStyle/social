import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailPage/model/services/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment,
    string | undefined,
    ThunkConfig<string>>(
        'articleDetails/addCommentForArticle',
        async (text, thunkApi) => {
            console.log(123);
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;
            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }
            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    text,
                    userId: userData.id,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article.id));
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
