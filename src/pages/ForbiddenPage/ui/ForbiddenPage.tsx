import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextBlock, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            <TextBlock text={t('У Вас нет доступа к этой странице')} size={TextSize.L} theme={TextTheme.PRIMARY} />
        </Page>
    );
});
export default ForbiddenPage;
