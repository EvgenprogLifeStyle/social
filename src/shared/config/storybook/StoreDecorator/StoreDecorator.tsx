import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsCommentsReducers } from 'pages/ArticlesDetailPage/model/slices/ArticleDetailsCommentsSlice';
import { profileReducer } from 'features/editableProfileCard/model/slice/ProfileSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducers,
};
const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        {Story()}
    </StoreProvider>
);

export default StoreDecorator;
