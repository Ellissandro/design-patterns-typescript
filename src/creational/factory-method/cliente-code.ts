import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { RandomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'Joao'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[RandomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();

  const newCarr = carFactory.pickUp(
    name,
    `UM NOVO CARRO - ${RandomNumbers(100)}`,
  );
  newCarr.stop();
  console.log('---');
}
