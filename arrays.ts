const carMakers = ['ford', 'volvo', 'audi'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['s60'], ['rs5']];

const car = carMakers[0];

carMakers.map((el) => {
  return el.toUpperCase();
});

//flexible types

const importantDates = [new Date(), '2030/10/10'];
const cars: (number | string)[] = [];

cars.push('sadas');
