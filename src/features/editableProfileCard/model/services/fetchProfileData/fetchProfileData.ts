import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateShema';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (userId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.get<Profile>(`/profile/${userId}`);

                if (!response) { throw new Error(); }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
