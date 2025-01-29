import type { Meta, StoryObj } from '@storybook/react';

import { MainLayouts } from './MainLayouts';

const meta: Meta<typeof MainLayouts> = {
    title: 'shared/MainLayouts',
    component: MainLayouts,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof MainLayouts>;

export const Primary: Story = {
    args: {},
};
