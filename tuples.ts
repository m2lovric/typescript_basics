const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 10];
const tea: Drink = ['brown', false, 5];

//tuple vs object
const carSpecs: [number, number] = [340, 1342];

const carStats = {
  horsepower: 400,
  weight: 1342,
};
