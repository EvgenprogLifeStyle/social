import { ArticleView } from 'entities/Article/model/types/article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                isLoading: false,
                error: '',
                limit: 5,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: false,
                isLoading: false,
                error: '',
                limit: 5,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchArticlesList isLoading false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                hasMore: false,
                isLoading: true,
                error: '',
                limit: 5,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    // test('error', async () => {
    //     const thunk = new TestAsyncThunk(fetchProfileData);
    //     thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.meta.requestStatus).toBe('rejected');
    //
    // });
});
