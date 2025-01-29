import withMock from 'storybook-addon-mock';
import articleRating from './articleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
var meta = {
    title: 'features/Raging/articleRating',
    component: articleRating,
    argTypes: {
    // backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
};
export default meta;
export var Primary = {
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
            url: "".concat(__API__, "/article-ratings?userId=1&articleId"),
            method: 'GET',
            status: 200,
            response: [
                { rate: 4 },
            ],
        },
    ],
};
export var WithoutRate = {
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
            url: "".concat(__API__, "/article-ratings?userId=1&articleId"),
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
