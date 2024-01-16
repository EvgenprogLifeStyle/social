import type { Meta, StoryObj } from '@storybook/react';

import { Story } from '@storybook/blocks';
import ListBox from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 40 }}><Story /></div>,
    ],
};

export default meta;
// eslint-disable-next-line no-redeclare
type Story = StoryObj<typeof ListBox>;

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: 'btn1',
        items: [
            {
                value: 'btn1',
                content: 'btn1',
            },
            {
                value: 'btn2',
                content: 'btn2',
            },
        ],
    },
};
export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: 'btn1',
        items: [
            {
                value: 'btn1',
                content: 'btn1',
            },
            {
                value: 'btn2',
                content: 'btn2',
            },
        ],
    },
};
export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: 'btn1',
        items: [
            {
                value: 'btn1',
                content: 'btn1',
            },
            {
                value: 'btn2',
                content: 'btn2',
            },
        ],
    },
};
export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: 'btn1',
        items: [
            {
                value: 'btn1',
                content: 'btn1',
            },
            {
                value: 'btn2',
                content: 'btn2',
            },
        ],
    },
};
