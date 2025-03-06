type unknownType = number | string;

interface IUser {
    name: string,
    age?: number,
    country? : string
}

export type { unknownType, IUser }