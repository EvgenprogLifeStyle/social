import type {Meta, StoryObj} from '@storybook/react';

import {uiDesignsSwitcher} from './uiDesignsSwitcher';

const meta: Meta<typeof uiDesignsSwitcher> = {
    title: 'shared/uiDesignsSwitcher',
    component: uiDesignsSwitcher,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof uiDesignsSwitcher>;

export const Primary: Story = {
    args: {},
};
