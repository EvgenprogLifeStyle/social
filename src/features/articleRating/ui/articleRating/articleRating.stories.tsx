import type { Meta, StoryObj } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import articleRating from './articleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof articleRating> = {
    title: 'features/Raging/articleRating',
    component: articleRating,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
};

export default meta;
type Story = StoryObj<typeof articleRating>;

export const Primary: Story = {
    args: {
        // articleId: '1',
    },
};

Primary.decorators = [StoreDecorator({
    user: { authData: { id: '123' } },
})];

Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId`,
            method: 'GET',
            status: 200,
            response: [
                { rate: 4 },
            ],
        },
    ],
};

export const WithoutRate: Story = {
    args: {
        // articleId: '1',
    },
};

WithoutRate.decorators = [StoreDecorator({
    user: { authData: { id: '123' } },
})];

WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId`,
            method: 'GET',
            status: 200,
            response: [
            ],
        },
    ],
};
