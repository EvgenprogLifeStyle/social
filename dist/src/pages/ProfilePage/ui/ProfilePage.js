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
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
var ProfilePage = function (_a) {
    var className = _a.className;
    var id = useParams().id;
    return (_jsx(Page, __assign({ className: classNames('', {}, [className]) }, { children: _jsx(VStack, __assign({ gap: "16", max: true }, { children: _jsx(EditableProfileCard, { id: id }, void 0) }), void 0) }), void 0));
};
export default ProfilePage;
