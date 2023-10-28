import { EntityState } from '@reduxjs/toolkit/src/entities/models';
import { ArticleSchema } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string

    view:ArticleView
    // pagination
    page:number;
    limit?:number;
    hasMore:boolean
}
