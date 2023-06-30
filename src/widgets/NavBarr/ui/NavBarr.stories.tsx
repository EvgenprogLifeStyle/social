import type { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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

export const Light: Story = {};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {
    args: {},
};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authDate: {},
    },
})];
