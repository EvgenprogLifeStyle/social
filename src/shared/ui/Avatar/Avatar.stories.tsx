import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarIcon from './avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },

};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarIcon,
        alt: 'Text-alt',

    },
};
export const Small: Story = {
    args: {
        size: 40,
        src: AvatarIcon,
        alt: 'Text-alt',

    },
};
