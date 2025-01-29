import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
var MainPage = function () {
    var t = useTranslation().t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (val) {
        setValue(val);
    };
    return (_jsx(Page, { children: t('Главная страница') }, void 0));
};
export default MainPage;
