import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
};

Primary.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
