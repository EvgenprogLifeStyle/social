import type { Meta, StoryObj } from '@storybook/react';

import { TextBlock } from 'shared/ui/Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        // eslint-disable-next-line i18next/no-literal-string
        children: <TextBlock text="Краткая информация" />,
    },
};
