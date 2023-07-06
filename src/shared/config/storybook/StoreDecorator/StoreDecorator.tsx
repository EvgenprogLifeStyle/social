import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from "entities/Profile";

const defaultAsuncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
};
const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
): Decorator => (Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsuncReducers, ...asyncReducers }}>
        {Story()}
    </StoreProvider>
);

export default StoreDecorator;
