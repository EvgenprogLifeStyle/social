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
import { Flex } from '../Flex/Flex';
export var VStack = function (props) {
    var _a = props.align, align = _a === void 0 ? 'start' : _a;
    return (_jsx(Flex, __assign({}, props, { direction: "column", align: align }), void 0));
};
