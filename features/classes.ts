class Vehicle {
  /* color: string;

  constructor(color: string) {
    this.color = color;
  } */
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('drift');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const audi = new Vehicle('orange');
console.log(audi.color);
//audi.honk(); error

const bmw = new Car(4, 'red');
bmw.startDrivingProcess();
console.log(bmw.color);
