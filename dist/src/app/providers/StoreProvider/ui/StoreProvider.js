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
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
export var StoreProvider = function (props) {
    var children = props.children, initialState = props.initialState, asyncReducers = props.asyncReducers;
    // const navigate = useNavigate();
    var store = createReduxStore(initialState, asyncReducers);
    console.log('RENDER');
    return (_jsx(Provider, __assign({ store: store }, { children: children }), void 0));
};
