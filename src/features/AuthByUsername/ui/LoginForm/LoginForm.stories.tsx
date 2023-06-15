import type { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};

Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const withError: Story = {
    args: {},
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'Error' },
})];

export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
