import type { Meta, StoryObj } from '@storybook/react';
import { t } from 'i18next';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
            </>
        ),
        direction: 'row',
    },
};
export const Column: Story = {
    args: {
        children: (
            <>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
            </>
        ),
        direction: 'column',
    },
};
export const RowGag4: Story = {
    args: {
        children: (
            <>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
            </>
        ),
        gap: '4',
        direction: 'row',
    },
};
export const RowGag8: Story = {
    args: {
        children: (
            <>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
            </>
        ),
        gap: '8',
        direction: 'row',
    },
};
export const RowGag16: Story = {
    args: {
        children: (
            <>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
            </>
        ),
        gap: '16',
        direction: 'row',
    },
};
export const RowGag32: Story = {
    args: {
        children: (
            <>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
                <div>{t('row')}</div>
            </>
        ),
        gap: '32',
        direction: 'row',
    },
};
export const ColumnGag4: Story = {
    args: {
        children: (
            <>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
            </>
        ),
        gap: '4',
        direction: 'column',
    },
};
export const ColumnGag8: Story = {
    args: {
        children: (
            <>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
            </>
        ),
        gap: '8',
        direction: 'column',
    },
};
export const ColumnGag16: Story = {
    args: {
        children: (
            <>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
            </>
        ),
        gap: '16',
        direction: 'column',
    },
};
export const ColumnGag32: Story = {
    args: {
        children: (
            <>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
                <div>{t('column')}</div>
            </>
        ),
        gap: '32',
        direction: 'column',
    },
};
