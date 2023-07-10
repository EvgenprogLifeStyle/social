import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { TextBlock } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }:ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>

                <TextBlock title={t('Профиль')} />
                <Button className={s.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={s.input}
                />
            </div>
        </div>
    );
};
