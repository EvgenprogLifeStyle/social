import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import RouteDecorator from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
