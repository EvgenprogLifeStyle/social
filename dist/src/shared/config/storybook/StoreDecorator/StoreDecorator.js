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
import { StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
var defaultAsyncReducers = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsReducer,
};
export var StoreDecorator = function (state, asyncReducers) { return function (StoryComponent) { return (_jsx(StoreProvider, __assign({ initialState: state, asyncReducers: __assign(__assign({}, defaultAsyncReducers), asyncReducers) }, { children: _jsx(StoryComponent, {}, void 0) }), void 0)); }; };
