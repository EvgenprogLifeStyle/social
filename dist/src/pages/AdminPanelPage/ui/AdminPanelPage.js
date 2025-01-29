import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
var AdminPanelPage = function () {
    var t = useTranslation('about').t;
    return (_jsx(Page, { children: t('Админ панель') }, void 0));
};
export default AdminPanelPage;
