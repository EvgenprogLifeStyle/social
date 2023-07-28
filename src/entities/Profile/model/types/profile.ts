import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';

export interface Profile{
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
    readonly: boolean
}
