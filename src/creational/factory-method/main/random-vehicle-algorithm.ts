import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { RandomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFacotry = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFacotry.getVehicle('Fuska');
  const car2 = carFacotry.getVehicle('Celta Preto');
  const bicyclce = bicycleFactory.getVehicle('Bicycle');
  const cars = [car1, car2, bicyclce];
  return cars[RandomNumbers(cars.length)];
}
