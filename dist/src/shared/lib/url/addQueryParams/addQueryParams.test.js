import { getQueryParams } from './addQueryParams';
describe('shared/url/addQueryParams', function () {
    test('test with one param', function () {
        var params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', function () {
        var params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('test with undefined', function () {
        var params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
