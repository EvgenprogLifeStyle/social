import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCardDeprecated } from './ProfileCardDeprecated';

const meta: Meta<typeof ProfileCardDeprecated> = {
    title: 'shared/ProfileCardDeprecated',
    component: ProfileCardDeprecated,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

export const Primary: Story = {
    args: {},
};
