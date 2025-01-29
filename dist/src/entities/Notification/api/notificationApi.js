import { rtkApi } from '@/shared/api/rtkApi';
var notificationApi = rtkApi.injectEndpoints({
    endpoints: function (build) { return ({
        getNotifications: build.query({
            query: function () { return ({
                url: '/notifications',
            }); },
        }),
    }); },
});
export var useNotifications = notificationApi.useGetNotificationsQuery;
