import type {Meta, StoryObj} from '@storybook/react';

import {DetailContainer} from './DetailContainer';

const meta: Meta<typeof DetailContainer> = {
    title: 'shared/DetailContainer',
    component: DetailContainer,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof DetailContainer>;

export const Primary: Story = {
    args: {},
};
