import {Country, Current} from "shared/const/common";

export interface Profile{
    first: string,
    lastname: string,
    age: number,
    currency: Current,
    country: Country,
    city: string,
    username: string,
    avatar: string
}


export interface ProfileSchema{
    data?:Profile,
    isLoading:boolean,
    error: string,
    readonly: boolean
}
