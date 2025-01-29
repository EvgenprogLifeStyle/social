import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', function () {
    test('should return value', function () {
        var state = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state)).toEqual('123123');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginUsername(state)).toEqual('');
    });
});
