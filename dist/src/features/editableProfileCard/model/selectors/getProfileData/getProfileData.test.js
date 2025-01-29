import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';
describe('getProfileData.test', function () {
    test('should return error', function () {
        var data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        var state = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileData(state)).toEqual(undefined);
    });
});
