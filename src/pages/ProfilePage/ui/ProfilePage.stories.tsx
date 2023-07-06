import type {Meta, StoryObj} from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import React from 'react';
import ProfilePage from './ProfilePage';
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {
    },
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {

    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
