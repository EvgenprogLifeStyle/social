import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsuncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
};
const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsuncReducers, ...asyncReducers }}>
        {Story()}
    </StoreProvider>
);

export default StoreDecorator;
