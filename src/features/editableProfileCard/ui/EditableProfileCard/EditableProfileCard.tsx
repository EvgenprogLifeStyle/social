import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { useSelector } from 'react-redux';
import { useInitEffect } from 'shared/lib/hooks/userInitEffect/useInitEffect';
import { Current } from 'entities/Current/model/types/currency';
import { Country } from 'entities/Country';
import { TextBlock, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileHeader, ValidateProfileError } from '../..';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';

interface editableProfileCardProps {
    className?: string
    id:string
}
const reducers: ReducerList = {
    profile: profileReducer,
};
export const EditableProfileCard = memo(({ className, id }: editableProfileCardProps) => {
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
    useInitEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ age: Number(value || '') }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string | undefined) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrent = useCallback((value: Current | undefined) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country | undefined) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>

            <VStack gap="16" max className={classNames('', {}, [className])}>
                <EditableProfileHeader />
                {validateErrors?.length
                    && validateErrors.map((error) => (
                        <TextBlock
                            key={error}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslate[error]}
                            data-testid="EditableProfileCard.Error"
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
            </VStack>
        </DynamicModuleLoader>
    );
});
