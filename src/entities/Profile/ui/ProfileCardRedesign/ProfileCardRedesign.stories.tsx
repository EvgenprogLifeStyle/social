import type {Meta, StoryObj} from '@storybook/react';

import {ProfileCardRedesign} from './ProfileCardRedesign';

const meta: Meta<typeof ProfileCardRedesign> = {
    title: 'shared/ProfileCardRedesign',
    component: ProfileCardRedesign,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCardRedesign>;

export const Primary: Story = {
    args: {},
};
