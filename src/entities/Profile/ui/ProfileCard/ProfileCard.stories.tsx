import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import Avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'Евгений',
            lastname: 'Романенко',
            age: 26,
            country: Country.Belarus,
            first: 'asd',
            city: Current.RUB,
            avatar: Avatar,
        },
    },
};

export const withError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
