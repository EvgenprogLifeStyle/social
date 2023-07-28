import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextAlign, TextBlock, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import s from './ProfileCard.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { Current, CurrentSelect } from 'entities/Current/intex';
import { Country, CountrySelect } from 'entities/Country';




interface ProfileCardProps {
    className?: string
    data?:Profile | undefined
    error?:string
    isLoading?:boolean
    readonly?:boolean
    onChangeFirstname?: (value?:string) => void
    onChangeLastname?: (value?:string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?:string) => void
    onChangeAvatar?: (value?:string) => void
    onChangeCurrent?: (current?:Current  | undefined) => void
    onChangeCountry?: (country?:Country | undefined) => void
}

export const ProfileCard = (props :ProfileCardProps) => {
    const {
        className, data, isLoading, error, onChangeFirstname, onChangeLastname, onChangeAge, onChangeCity, onChangeUsername, onChangeAvatar, onChangeCurrent, onChangeCountry, readonly,
    } = props;
    const { t } = useTranslation('profile');

    console.log(typeof Current.RUB)
    // console.log(typeof data?.age)
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
    const mods:Mods = {
        [s.editing]: !readonly,
    };

    return (
        <div className={classNames(s.ProfileCard, mods, [className])}>

            <div className={s.data}>
                {data?.avatar
                    && (
                        <div className={s.avatarWrapper}>

                            <Avatar src={data?.avatar} alt={data?.username} />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={s.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={s.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={String(data?.age)}
                    placeholder={t('Ваша возраст')}
                    className={s.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваша город')}
                    className={s.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={s.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={s.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
               <CurrentSelect
                   className={s.input}
                   value={data?.currency}
                   onChange={onChangeCurrent}
                   readonly={readonly} />
                <CountrySelect
                   className={s.input}
                   value={data?.country}
                   onChange={onChangeCountry}
                   readonly={readonly} />
            </div>
        </div>
    );
};