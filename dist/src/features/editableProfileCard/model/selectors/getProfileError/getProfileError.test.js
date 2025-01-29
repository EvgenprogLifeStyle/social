import { getProfileError } from './getProfileError';
describe('getProfileError.test', function () {
    test('should return error', function () {
        var state = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state)).toEqual('123');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileError(state)).toEqual(undefined);
    });
});
