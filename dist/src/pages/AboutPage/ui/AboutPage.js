import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
var AboutPage = function () {
    var t = useTranslation('about').t;
    return (_jsx(Page, { children: t('О сайте') }, void 0));
};
export default AboutPage;
