import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'shared/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {},
};
