import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_AGE = 'INCORECT_AGE',
    INCORECT_COUNTRY = 'INCORECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error: string | undefined,
    readonly: boolean,
    validateErrors?: ValidateProfileError[]
}
