import { MyDatabseModule } from './db/my-database-module';

const myDatabseClassic = MyDatabseModule;
myDatabseClassic.add({ name: 'Elissandro', age: 21 });
myDatabseClassic.add({ name: 'João', age: 23 });
myDatabseClassic.add({ name: 'Maria', age: 34 });
myDatabseClassic.remove(1);
myDatabseClassic.show();

export { myDatabseClassic };
