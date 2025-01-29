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
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
export var OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export var Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};
export var SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export var SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
export var Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
