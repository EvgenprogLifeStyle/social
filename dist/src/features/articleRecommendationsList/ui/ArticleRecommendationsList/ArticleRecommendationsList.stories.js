var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
};
var Template = function (args) { return _jsx(ArticleRecommendationsList, __assign({}, args), void 0); };
var article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};
export var Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: "".concat(__API__, "/articles?_limit=3"),
            method: 'GET',
            status: 200,
            response: [
                __assign(__assign({}, article), { id: '1' }),
                __assign(__assign({}, article), { id: '2' }),
                __assign(__assign({}, article), { id: '3' }),
            ],
        },
    ],
};
