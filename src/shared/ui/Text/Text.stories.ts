import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextBlock, TextTheme } from './Text';

const meta: Meta<typeof TextBlock> = {
    title: 'shared/Text',
    component: TextBlock,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const onlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark: Story = {
    args: {
        text: 'Text',
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const error: Story = {
    args: {
        title: 'Title error',
        text: 'Text error',
        theme: TextTheme.ERROR,
    },
};
