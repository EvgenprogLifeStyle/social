import type { Meta, StoryObj } from '@storybook/react';

import { ScrollTolbar } from './ScrollTolbar';

const meta: Meta<typeof ScrollTolbar> = {
    title: 'shared/ScrollTolbar',
    component: ScrollTolbar,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ScrollTolbar>;

export const Primary: Story = {
    args: {},
};
