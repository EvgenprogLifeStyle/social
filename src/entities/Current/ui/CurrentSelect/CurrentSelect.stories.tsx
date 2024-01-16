import type { Meta, StoryObj } from '@storybook/react';
import { CurrentSelect } from './CurrentSelect';

const meta: Meta<typeof CurrentSelect> = {
    title: 'entities/CurrentSelect',
    component: CurrentSelect,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof CurrentSelect>;

export const Primary: Story = {
    args: {

    },
};
