import { ArticleSchema } from './article';

export interface ArticleDetailSchema{
    isLoading: boolean;
    error?: string
    data?:ArticleSchema
}
