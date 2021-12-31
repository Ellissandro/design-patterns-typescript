import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFacotry = new EnterpriseCreateVehicleCustomerFactory();
const individualFacotry = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFacotry.createVehicle('Fusca', 'João');
const car2 = individualFacotry.createVehicle('Celta', 'Helena');

car1.pickUp();
car2.pickUp();
