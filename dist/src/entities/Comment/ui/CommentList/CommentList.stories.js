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
import { CommentList } from './CommentList';
export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(CommentList, __assign({}, args), void 0); };
export var Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya' },
        },
    ],
};
export var Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
