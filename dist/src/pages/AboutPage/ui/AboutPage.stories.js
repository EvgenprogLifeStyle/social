import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function () { return _jsx(AboutPage, {}, void 0); };
export var Normal = Template.bind({});
Normal.args = {};
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
