import { getProfileIsLoading } from './getProfileIsLoading';
describe('getProfileIsLoading.test', function () {
    test('should work with filled state', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileIsLoading(state)).toEqual(undefined);
    });
});
