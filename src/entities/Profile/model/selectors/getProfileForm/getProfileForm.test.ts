import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'Евгений',
            lastname: 'Романенко',
            age: 26,
            country: Country.Belarus,
            first: 'asd',
            city: Current.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },

        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should  work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
