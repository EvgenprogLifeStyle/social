import type {Meta, StoryObj} from '@storybook/react';

import {ArticleSortSelector} from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'shared/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
    args: {},
};
