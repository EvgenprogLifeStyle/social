import { EntityState } from '@reduxjs/toolkit/src/entities/models';
import { ArticleSchema } from 'entities/Article';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number;
    limit: number;
    hasMore: boolean
// filters
    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited: boolean
}
