import {rtkApi} from '@/shared/api/rtkApi';
import {User} from '../model/types/user';
import {JsonSettings} from '../model/types/jsonSettings';

interface SetJsonSettingsArg {
    userId: string,
    jsonSettings: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({userId, jsonSettings}) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getJsonSettings: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});

// export const useNotifications = notificationApi.useGetNotificationsQuery;

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
export const getJsonSettingsQuery = userApi.endpoints.getJsonSettings.initiate;
