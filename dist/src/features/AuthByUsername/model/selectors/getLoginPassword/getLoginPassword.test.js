import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword.test', function () {
    test('should return value', function () {
        var state = {
            loginForm: {
                password: '123123',
            },
        };
        expect(getLoginPassword(state)).toEqual('123123');
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getLoginPassword(state)).toEqual('');
    });
});
