import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading, getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { Current } from 'entities/Current/intex';
import { Country } from 'entities/Country';
import { TextBlock, TextTheme } from 'shared/ui/Text/Text';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORECT_AGE]: t('Некорретный возраст'),
        [ValidateProfileError.INCORECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value:string | undefined) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value:string | undefined) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ age: Number(value || '') }));
    }, [dispatch]);

    const onChangeCity = useCallback((value:string | undefined) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value:string | undefined) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value:string | undefined) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrent = useCallback((value:Current | undefined) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value:Country | undefined) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length
                    && validateErrors.map((error) => (
                        <TextBlock
                            key={error}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslate[error]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrent={onChangeCurrent}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
