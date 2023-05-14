import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwicher } from 'widgetss/ThemeSwicher';
import React from 'react';

const meta: Meta<typeof ThemeSwicher> = {
    title: 'shared/ThemeSwicher',
    component: ThemeSwicher,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof ThemeSwicher>;

export const Light: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {

    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
