import type { Meta, StoryObj } from '@storybook/react';

import { scrollToTopButton } from './scrollToTopButton';

const meta: Meta<typeof scrollToTopButton> = {
    title: 'shared/scrollToTopButton',
    component: scrollToTopButton,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof scrollToTopButton>;

export const Primary: Story = {
    args: {},
};
