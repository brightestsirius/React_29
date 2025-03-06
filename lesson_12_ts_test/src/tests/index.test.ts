import { test, expect, afterEach, afterAll, describe } from 'vitest';

import { sum, getUser, awaitTimeout, fetchData } from './index';
import { DEFAULT_USER, DEFAULT_TIMER, DEFAULT_FETCHED_DATA } from './mockedData';

test(`fn should return sum of numbers`, () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
});

test(`fn should return number`, () => {
    const result = sum(2);
    expect(result).toBe(2);
    expect(result).not.toBe(`2`);
});

describe(`USERS FNS`, () => {
    test(`fn should return default user`, () => {
        const result = getUser();
        expect(result).toEqual(DEFAULT_USER);
    })
    
    test(`fn should return user`, () => {
        const result = getUser({name: `Katya`, age: 20});
        expect(result).toEqual({name: `Katya`, age: 20, country: `Ukraine`});
    })
    
    let countOfTests = 0;
    
    afterEach(() => {
        console.log(`afterEach`, ++countOfTests);
    })
    
    afterAll(() => {
        console.log(`afterAll`, countOfTests);
    })
})

test(`fn should return text after 1 sec`, async () => {
    const result = await awaitTimeout(DEFAULT_TIMER);
    expect(result).toBe(`after ${DEFAULT_TIMER} ms`);
})

test(`fn should return fetched data`, async () => {
    const result = await fetchData();
    expect(result).toEqual(DEFAULT_FETCHED_DATA);
})