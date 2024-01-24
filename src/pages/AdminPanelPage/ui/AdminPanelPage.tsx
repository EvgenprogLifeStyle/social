import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Админ панель')}
        </Page>
    );
});
export default AdminPanelPage;
