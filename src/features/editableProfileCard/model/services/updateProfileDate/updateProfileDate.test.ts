import axios from 'axios';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from 'features/editableProfileCard';
import { updateProfileDate } from './updateProfileDate';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    username: 'Евгений',
    lastname: 'Романенко',
    age: 26,
    country: Country.Belarus,
    first: 'asd',
    city: Current.RUB,
    id: '1',
};
describe('updateProfileDate.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileDate, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    // test('error', async () => {
    //     const thunk = new TestAsyncThunk(updateProfileDate,{
    //         profile:{
    //             form:data
    //         }
    //     });
    //     thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    //
    //     const result = await thunk.callThunk();
    //
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toEqual([
    //         ValidateProfileError.SERVER_ERROR
    //     ]);
    //
    // });

    test('validate errror', async () => {
        const thunk = new TestAsyncThunk(updateProfileDate, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
        ]);
    });
});
