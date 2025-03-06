import { unknownType } from './../types/types'

const convertToNumber = (value: unknownType): number => +(value);
const convertToString = (value: unknownType): string => String(value);

export { convertToNumber, convertToString }