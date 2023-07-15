import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';

import {TextAlign, TextBlock, TextTheme} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {Loader} from 'shared/ui/Loader/Loader';
import s from './ProfileCard.module.scss';
import {Profile} from '../../model/types/profile';

interface ProfileCardProps {
    className?: string
    data?:Profile
    error?:string
    isLoading?:boolean
}

export const ProfileCard = (props :ProfileCardProps) => {
    const {
        className, data, isLoading, error,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(s.ProfileCard, {}, [className, s.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(s.ProfileCard, {}, [className, s.error])}>
                <TextBlock
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка загрузки профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>

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
