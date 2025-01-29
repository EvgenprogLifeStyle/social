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
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(LoginForm, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    })];
export var withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    })];
export var Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
        loginForm: { isLoading: true },
    })];
