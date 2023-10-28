import {ArticleView} from 'entities/Article/model/types/article';
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {fetchArticlesList} from '../fetchArticlesList';
import {initActionPage} from './initActionPage';

jest.mock('../fetchArticlesList');

describe('initActionPage.test', () => {
    test('not inited', async () => {
        const thunk = new TestAsyncThunk(initActionPage, {
            articlePage: {
                page: 1,
                hasMore: true,
                isLoading: false,
                error: '',
                limit: 5,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
                _inited: false
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
     });
    test('inited', async () => {
        const thunk = new TestAsyncThunk(initActionPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                isLoading: false,
                error: '',
                limit: 5,
                view: ArticleView.SMALL,
                ids: [],
                entities: {},
                _inited: true
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
     });
});
