import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageFilter } from './ArticlePageFilter';

const meta: Meta<typeof ArticlePageFilter> = {
    title: 'entities/Article/ArticlePageFilter',
    component: ArticlePageFilter,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlePageFilter>;

export const Primary: Story = {
    args: {},
};
