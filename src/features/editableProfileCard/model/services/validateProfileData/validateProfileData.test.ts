import axios from 'axios';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import { ValidateProfileError } from 'features/editableProfileCard';
import { ValidateProfileData } from './validateProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    username: 'Евгений',
    lastname: 'Романенко',
    age: 26,
    country: Country.Belarus,
    first: 'asd',
    city: Current.RUB,
};
describe('ValidateProfileData.test', () => {
    test('success', async () => {
        const result = ValidateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without first and fastname ', async () => {
        const result = ValidateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
        ]);
    });
    test('icorrect age ', async () => {
        const result = ValidateProfileData({ ...data, age: 0 });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_AGE,
        ]);
    });
    test('icorrect country ', async () => {
        const result = ValidateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_COUNTRY,
        ]);
    });
    test('icorrect all ', async () => {
        const result = ValidateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
            ValidateProfileError.INCORECT_AGE,
            ValidateProfileError.INCORECT_COUNTRY,
        ]);
    });
    // test('error', async () => {
    //     const thunk = new TestAsyncThunk(fetchProfileData);
    //     thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.meta.requestStatus).toBe('rejected');
    //
    // });
});
