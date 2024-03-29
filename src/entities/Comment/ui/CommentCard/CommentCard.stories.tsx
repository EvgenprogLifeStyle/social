import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {
        comment:
            {
                id: '1',
                text: 'some comment',
                user: { id: '1', username: 'admin' },
            },
    },
};
export const Loading: Story = {
    args: {
        comment:
            {
                id: '1',
                text: 'some comment',
                user: { id: '1', username: 'admin' },
            },
        isLoading: true,
    },
};
