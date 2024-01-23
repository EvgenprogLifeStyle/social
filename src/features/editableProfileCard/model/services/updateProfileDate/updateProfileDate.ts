import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { ValidateProfileError } from 'features/editableProfileCard';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileDate = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = ValidateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }
            try {
                const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
                if (!response) throw new Error();
                return response.data;
            } catch (e) {
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
