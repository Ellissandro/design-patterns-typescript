import { User } from '../interfaces/user';

export class MyDatabseClassic {
  private static _istance: MyDatabseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  static get istance(): MyDatabseClassic {
    if (MyDatabseClassic._istance === null) {
      MyDatabseClassic._istance = new MyDatabseClassic();
    }

    return MyDatabseClassic._istance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
