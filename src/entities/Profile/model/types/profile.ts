import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';

export enum ValidateProfileError {
    INCORECT_USER_DATA='INCORECT_USER_DATA',
    INCORECT_AGE='INCORECT_AGE',
    INCORECT_COUNTRY='INCORECT_COUNTRY',
    NO_DATA='NO_DATA',
    SERVER_ERROR='SERVER_ERROR'
}

export interface Profile{
    id?: string,
    first?: string,
    lastname?: string,
    age?: string | number,
    currency?: Current,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema{
    data?:Profile,
    form?: Profile,
    isLoading:boolean,
    error: string | undefined,
    readonly: boolean,
    validateErrors?:ValidateProfileError[]
}
