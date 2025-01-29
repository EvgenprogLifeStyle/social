import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeaturesFlagsOptions {
    userId: string,
    features: Partial<FeatureFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeaturesFlags: build.mutation<void, UpdateFeaturesFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeaturesFlags.initiate;
