import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileReducer} from "entities/Profile";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfileProps {
    className?: string
}

export const Profile = ({className}: ProfileProps) => {
    const {t} = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>

            </div>
        </DynamicModuleLoader>

    );
};
