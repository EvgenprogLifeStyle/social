import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {
        data: 'const meta: Meta<typeof Code> = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    tags: [\'autodocs\'],\n'
            + '    argTypes: {\n'
            + '        // backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '};',
    },
};
