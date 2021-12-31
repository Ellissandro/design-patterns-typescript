import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleNmae: string): Vehicle {
    const car = this.getVehicle(vehicleNmae);
    car.pickUp(customerName);
    return car;
  }
}
