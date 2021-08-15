const today = new Date();
today.getDate();

class Color {

};

const red = new Color();

//type annotations

//variables

let apples: number = 5;
//apples = true; error can't assign other type
let word: string = 'something';
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ['red', 'green'];

class Car {
};

const audi: Car = new Car();

let point: {x: number, y: number} = {
  x: 10,
  y: 20
}

const logNumber: (i : number) => void = (i) => {
  console.log(i);
}

//when to use annotations
// 1. function that returns any type
const json = '{"x" : 10, "y" : 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);

console.log(coordinates);

// 2. when we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if ( words[i] === 'green') {
    foundWord = true;
  }
}

// 3. when we have a variable whose type can't be inferred correctly

let numbers = [-10, -2, 23];
let numberAboveZero: boolean | number = false;

numbers.map(el => el > 0 ? numberAboveZero = el : false);
console.log(numberAboveZero);