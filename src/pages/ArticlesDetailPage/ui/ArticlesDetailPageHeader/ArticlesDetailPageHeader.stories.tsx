import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesDetailPageHeader } from './ArticlesDetailPageHeader';

const meta: Meta<typeof ArticlesDetailPageHeader> = {
    title: 'shared/ArticlesDetailPageHeader',
    component: ArticlesDetailPageHeader,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesDetailPageHeader>;

export const Primary: Story = {
    args: {},
};
