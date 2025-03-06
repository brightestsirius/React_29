let strValue: string = `value`;
let numberValue: number = 10;
let booleanValue: boolean = true;
let undefinedValue: undefined = undefined;
let nullValue: null = null;

let Oleg: (string | boolean) = `10`; 

type maybeString = string | number | undefined;
let userId: maybeString = `10`;

let userMonth: any = `sept`;
userMonth = 10;
userMonth = true;

let animals: string[] = [`cat`, `dog`];
let ids: (maybeString)[] = [10, `10`, undefined];

interface Animal{
    type: string,
    name: string,
    children?: IUser[],
}

enum REST {
    get = `GET`,
    delete = `DELETE`,
    post = `POST`
}

interface IUser {
    name: string,
    age: number,
    children?: string[],
    animals?: Animal[],
    methods: REST[]
}

let userAnton: IUser = {
    name: `Anton`,
    age: 20,
    animals: [
        {
           name: `Patron`,
           type: `dog`
        }
    ],
    methods: [REST.get, REST.delete]
}

const render = (value?: string):void => {
    console.log(value);
}

render(`hello`);
render();

const sum = (a:number, b?:number):number => {
    if(b) return a+b;
    else return a;
}

sum(10);

// generic
const makeState = <T>(defaultState: T) => {
    let state:T = defaultState;

    const getState = () => state;

    const setState = (newState: T) => {
        state = newState;
    }

    return {getState, setState};
}

let myState = makeState(1);
myState.setState(2);

console.log(myState.getState());

// Partial – some of options
// Pick - only necessary options
// Omit - without options

interface Student{
    id: number;
    name: string;
    country: string;
    isMarried: boolean;
}

type PartialStudent = Partial<Student>;
type PickStudent = Pick<Student, "id" | "name">
type OmitStudent = Omit<Student, "isMarried" | "country">

let student_1:PartialStudent = {
    id: 1,
    country: `Ukraine`
}

let student_2: PickStudent = {
    id: 1,
    name: `Student 2`,
}

let student_3: OmitStudent = {
    id: 1,
    name: `Anton`
}