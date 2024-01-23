import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'features/editableProfileCard';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORECT_USER_DATA],
            },

        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
    });

    test('should  work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
