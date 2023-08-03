import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },

        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });

    test('should  work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
