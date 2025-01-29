import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
var ForbiddenPage = function () {
    var t = useTranslation('').t;
    return (_jsx(Page, { children: t('У вас нет доступа к этой странице') }, void 0));
};
export default ForbiddenPage;
