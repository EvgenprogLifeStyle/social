import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBarr } from './NavBarr';

const meta: Meta<typeof NavBarr> = {
    title: 'widget/NavBar',
    component: NavBarr,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NavBarr>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
