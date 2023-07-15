import {classNames} from "shared/lib/classNames/classNames";
import s from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next';
import {TextBlock} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({className}:ProfilePageHeaderProps) => {
const { t } = useTranslation();
    return (
        <div className={classNames(s.ProfilePageHeader,{},[className])}>


                <TextBlock title={t('Профиль')} />
                <Button className={s.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
          
        </div>
    );
};
