import { EntityState } from '@reduxjs/toolkit/src/entities/models';
import { ArticleSchema } from 'entities/Article';

export interface ArticleDetailsRecommendationSchema extends EntityState<ArticleSchema> {
    isLoading?: boolean
    error?: string
    // data?:Comment[]
}
