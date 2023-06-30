import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Placeholder',
        value: '123',
    },
};
