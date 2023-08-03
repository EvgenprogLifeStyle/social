import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/Button/Button';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: '123' },
            { value: '2222', content: '2222' },
        ],
    },
};
