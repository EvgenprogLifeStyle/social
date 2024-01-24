import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { getUserAuthData } from 'entities/User';
import { TextBlock } from 'shared/ui/Text/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { updateProfileDate } from '../../model/services/updateProfileDate/updateProfileDate';

interface ArticlesDetailPageHeaderProps {
    className?: string
}

export const EditableProfileHeader = memo(({ className }: ArticlesDetailPageHeaderProps) => {
    const { t } = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileDate());
    }, [dispatch]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <TextBlock title={t('Профиль')} />
            {canEdit
                && (
                    <div>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                            : (
                                <HStack gap="16">
                                    <Button
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileHeader.CancelButton"

                                    >
                                        {t('Отменить')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileHeader.SaveButton"

                                    >
                                        {t('Сохранить')}
                                    </Button>
                                </HStack>
                            )}
                    </div>
                )}
        </HStack>
    );
});
