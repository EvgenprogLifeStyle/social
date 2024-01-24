import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'shared/AdminPanelPage',
    component: AdminPanelPage,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
    args: {},
};
