import type { Meta, StoryObj } from '@storybook/react';

import ForbiddenPage from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {
    args: {},
};
