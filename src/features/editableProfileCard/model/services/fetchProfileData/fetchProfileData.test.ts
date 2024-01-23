import axios from 'axios';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

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
describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
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
