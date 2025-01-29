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
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
};
var Template = function (args) { return _jsx(NotificationList, __assign({}, args), void 0); };
export var Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: "".concat(__API__, "/notifications"),
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
            ],
        },
    ],
};
