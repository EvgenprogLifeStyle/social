import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';

import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
    >(
        'user/saveJsonSettings',
        async (newJsonSettings, thunkApi) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkApi;
            const userData = getUserAuthData(getState());
            const currentJsonSettings = getJsonSettings(getState());
            if (!userData) {
                return rejectWithValue('пользователь не авторизован');
            }
            try {
                const response = await dispatch(setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: { ...currentJsonSettings, ...newJsonSettings },
                })).unwrap();

                if (!response.jsonSettings) {
                    return rejectWithValue('error');
                }

                return response.jsonSettings;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
