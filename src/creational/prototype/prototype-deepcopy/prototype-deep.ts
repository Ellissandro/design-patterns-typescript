export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addreses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addreses = this.addreses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addreses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const adress1 = new Address('Av Paris', 3625);
const person1 = new Person('Elissandro', 21);
person1.addAddress(adress1);
const person2 = person1.clone();

person1.addreses[0].street = 'Bla bla bla';

person2.name = 'Person 2';
console.log(person2);
console.log(person2.addreses);

console.log();
console.log(person1);
console.log(person1.addreses);
