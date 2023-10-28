import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticlesListIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesListError = (state: StateSchema) => state.articlePage?.error || undefined;
export const getArticlesListView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlesListPage = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesListLimit = (state: StateSchema) => state.articlePage?.limit || 4;
export const getArticlesListHasMore = (state: StateSchema) => state.articlePage?.hasMore;
