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