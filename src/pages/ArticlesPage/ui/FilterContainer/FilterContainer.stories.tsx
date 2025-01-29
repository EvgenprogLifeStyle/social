import type {Meta, StoryObj} from '@storybook/react';

import {FilterContainer} from './FilterContainer';

const meta: Meta<typeof FilterContainer> = {
    title: 'shared/FilterContainer',
    component: FilterContainer,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof FilterContainer>;

export const Primary: Story = {
    args: {},
};
