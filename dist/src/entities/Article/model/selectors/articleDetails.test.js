import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from './articleDetails';
describe('articleDetails.test', function () {
    test('should return data', function () {
        var data = {
            id: '1',
            title: 'subtitle',
        };
        var state = {
            articleDetails: {
                data: data,
            },
        };
        expect(getArticleDetailsData(state)).toEqual(data);
    });
    test('should work with empty state data', function () {
        var state = {};
        expect(getArticleDetailsData(state)).toEqual(undefined);
    });
    test('should return error', function () {
        var state = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state)).toEqual('error');
    });
    test('should work with empty state error', function () {
        var state = {};
        expect(getArticleDetailsError(state)).toEqual(undefined);
    });
    test('should return isLoading', function () {
        var state = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state)).toEqual(true);
    });
    test('should work with empty state isLoading', function () {
        var state = {};
        expect(getArticleDetailsIsLoading(state)).toEqual(false);
    });
});
