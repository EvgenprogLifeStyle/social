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
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Sidebar, __assign({}, args), void 0); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];
export var NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
