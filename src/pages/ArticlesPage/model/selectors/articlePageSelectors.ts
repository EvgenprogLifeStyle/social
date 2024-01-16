import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article/model/types/article';

export const getArticlesListIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesListError = (state: StateSchema) => state.articlePage?.error || undefined;
export const getArticlesListView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlesListPage = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlesListLimit = (state: StateSchema) => state.articlePage?.limit || 4;
export const getArticlesListHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlesListInited = (state: StateSchema) => state.articlePage?._inited;
export const getArticlesListSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED;
export const getArticlesListOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
export const getArticlesListSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlesListType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL;
