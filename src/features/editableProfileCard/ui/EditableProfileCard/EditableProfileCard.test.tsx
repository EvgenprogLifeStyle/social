import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from 'features/editableProfileCard';
import { Profile } from 'entities/Profile';
import { Current } from 'entities/Current/model/types/currency';
import { Country } from 'entities/Country';
import { userEvent } from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/ProfileSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    username: 'admin123',
    age: 455,
    currency: Current.RUB,
    country: Country.Belarus,
    city: 'Krichev',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authDate: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('feature/EditableProfileCard', () => {
    test('Режим ридонли должен переключится', async () => {
        componentRender(
            <EditableProfileCard id="1" />,
            options,
        );
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileHeader.CancelButton')).toBeInTheDocument();
    });
    test('При отмене значение обнуляются', async () => {
        componentRender(
            <EditableProfileCard id="1" />,
            options,
        );
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
    test('Должна появляться ошибка', async () => {
        componentRender(
            <EditableProfileCard id="1" />,
            options,
        );
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    test('Если нет ошибки валидации', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(
            <EditableProfileCard id="1" />,
            options,
        );
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'admin');
        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
