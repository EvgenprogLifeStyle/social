import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit/src/entities/models';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean
    error?: string
    // data?:Comment[]
}
