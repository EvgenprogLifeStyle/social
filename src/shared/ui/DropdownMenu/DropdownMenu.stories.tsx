import type { Meta, StoryObj } from '@storybook/react';
import { t } from 'i18next';
import { Button } from 'shared/ui/Button/Button';
import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
    title: 'shared/DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
    args: {
        trigger: <Button>{t('Кнопка')}</Button>,
        items: [{
            content: 'first',
        }, {
            content: 'first1',
        }, {
            content: 'first2',
        }, {
            content: 'first3',
        }],
    },
};
