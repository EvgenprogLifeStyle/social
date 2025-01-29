import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
};
var Template = function () { return _jsx(MainPage, {}, void 0); };
export var Normal = Template.bind({});
Normal.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
