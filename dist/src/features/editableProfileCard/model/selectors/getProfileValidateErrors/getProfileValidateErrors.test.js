import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';
describe('getProfileValidateErrors.test', function () {
    test('should work with filled state', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});
