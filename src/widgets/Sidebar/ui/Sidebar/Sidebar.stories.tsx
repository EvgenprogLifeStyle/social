import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};
Light.decorators = [StyleDecorator, StoreDecorator({
    user: { authDate: {} },
}), ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [StyleDecorator, StoreDecorator({
    user: { authDate: {} },
}), ThemeDecorator(Theme.DARK)];

export const NoAuth: Story = {
    args: {},
};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
