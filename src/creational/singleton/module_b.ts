import { MyDatabseModule } from './db/my-database-module';
import { myDatabseClassic as myDatabseFromModuleA } from './module_a';

const myDatabseClassic = MyDatabseModule;
myDatabseClassic.add({ name: 'Roberto', age: 21 });
myDatabseClassic.add({ name: 'Joana', age: 23 });
myDatabseClassic.add({ name: 'Luiza', age: 34 });
myDatabseClassic.remove(1);
myDatabseClassic.show();

console.log(myDatabseFromModuleA === myDatabseClassic);
