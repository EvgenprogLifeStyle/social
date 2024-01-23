import { Country } from 'entities/Country';
import { Current } from 'entities/Current/intex';

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
