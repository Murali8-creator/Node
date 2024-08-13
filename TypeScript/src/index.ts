//basic types
// let id:number = 5;
// let str:String = "hello";
// let isTrue: boolean = true;
// let custom: any = 'bye';
// custom = 5;

// let ids: number[] = [1,2,3,4,5];
// ids.push(7);
// // ids.push('hello');

// let arr: any[] = [1,"h",true];


// //tuples
// let person:[number, string, boolean] = [1, 'brad', true];

// let employee:[number, string][];

// employee = [
//     [1,"hi"],
//     [2,"bye"],
//     // ['hi',3]
// ];

// //Union
// let pid: string | number
// pid  = '22'

// //Enum
// enum Direction1 {
//     Up,
//     Down,
//     Left,
//     Right,
// }


// console.log(Direction1.Up);

// enum Direction2 {
//     Up="Up",
//     Down="Down",
//     Left="Left",
//     Right="Right",
// }
// console.log(Direction2.Down);


// // Objects
// // const user:{
// //     id: number,
// //     name: string
// // } = {
// //     id : 8,
// //     name: 'sai'
// // };

// type User = {
//     id: number,
//     name: string
// };

// const user: User = {
//     id: 8,
//     name: 'sai'
// }

// interface UserInterface { //we cannot use interface with primitives or unions
//     readonly id: number;
//     name:string;
//     age?:number
// }

// const user2 : UserInterface = {
//     id: 8,
//     name: 'sai'
// }

// // user2.id = 9; error TS2540: Cannot assign to 'id' because it is a read-only property


// // Type Assertion
// let cid: any = 1;


// // let customerId =<number> cid;
// let customerId = id as number;



// //Functions
// let a = 8;
// let b =4;

// console.log(add(a,b));


// function add(x:number, y:number) : number{
//      let res = x+y;
//      return res;
// }

//void
// function log(message : number | string | boolean) : void{
//     console.log(message);
    
// }

// log(true)

//function interfaces
// interface MathFunc {
//     (x:number, y: number) : number
// }

// const addNums : MathFunc = (x:number, y:number): number => x+y;


//Classes
//   interface PersonInterface {
//     id: number
//     name: string
//     register() :string
//   }

//   class Person implements PersonInterface{
//       id: number;
//       name: string;
      

//       constructor(id: number, name: string){
//         console.log('hello');
        
//         this.id = id,
//         this.name = name
//       }
//       register(){
//         return `${this.name} is now registered`
//       }
//   }
//   const mike = new Person(1, 'mike');
// console.log( mike.register());


// class Employee extends Person {
//     position: string;

//     constructor(id:number, name:string, position:string){
//         super(id, name);
//         this.position = position;
//     }
//     register(): string {
//         return `${this.name} is now registered and his position is ${this.position}`;
//     }
// }

// const tyler = new Employee(8,'tyler','sde');
// console.log( tyler.register());


//Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

const numsArr = getArray<number>([1,2,3]);
const strArr = getArray<string>(['a','b','c']);

console.log(numsArr);
numsArr.push(8);
console.log(numsArr);

console.log(strArr);
strArr.push("4");
console.log(strArr);
