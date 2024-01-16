import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'some comment',
                user: { id: '1', username: 'admin' },
            },
            {
                id: '2',
                text: 'some comment 2',
                user: { id: '1', username: 'admin1' },
            },
        ],
    },

};
export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },

};
