import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpRiseCar } from '../vehicles/enterprise-car';
import { VehicleProtocol } from '../vehicles/vehicle-protocol';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpRiseCar(vehicleName, customer);
  }
}
