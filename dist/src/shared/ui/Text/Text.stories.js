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
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
export var Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
};
export var onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsun',
};
export var onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description Description',
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
export var SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.M,
};
export var SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.S,
};
