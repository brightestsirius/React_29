import { unknownType, IUser } from './../types/types';
import { DEFAULT_USER } from './mockedData'
import { convertToNumber } from './../utils/utils'

const sum = (a: number, b?: unknownType): number => {
    if (b) return convertToNumber(a) + convertToNumber(b);
    else return convertToNumber(a);
}

const getUser = (user?: IUser): IUser => {
    if (user) return { ...user, country: `Ukraine` };
    return DEFAULT_USER;
}

const awaitTimeout = async (timer: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after ${timer} ms`);
        }, timer);
    })
}

const fetchData = async () => {
    const request = await fetch(`https://679286cdcf994cc6804a5368.mockapi.io/test`),
        response = await request.json();

    return response;
}

export { sum, getUser, awaitTimeout, fetchData };