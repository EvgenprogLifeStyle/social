import { getLoginIsLoading } from './getLoginIsLoading';
describe('getLoginIsLoading.test', function () {
    test('should return true', function () {
        var state = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginIsLoading(state)).toEqual(false);
    });
});
