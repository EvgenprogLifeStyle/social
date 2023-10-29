import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlePage';
import { ScrollSaveSchema } from 'features/ScrollSave';

export interface StateSchema {
    counter:CounterSchema,
    user: UserSchema,
    saveScroll: ScrollSaveSchema,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?:ProfileSchema,
    articleDetails?:ArticleDetailSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentForm?:AddCommentFormSchema
    articlePage?:ArticlesPageSchema
}
export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void

    // true - вмонтирован, false - демонтирован
    getMountedReducers:()=>MountedReducers
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
     reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance
    // navigation?:(to: To, options?: NavigateOptions)=> void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra:ThunkExtraArg
    state: StateSchema
}
