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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from './Flex';
export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Flex, __assign({}, args), void 0); };
export var Row = Template.bind({});
Row.args = {
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
export var ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (_jsxs(_Fragment, { children: [_jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0), _jsx("div", { children: "first" }, void 0)] }, void 0)),
};
