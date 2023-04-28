export class User {

  constructor(public id: number, public name: string, public status: 'active' | 'inactive', public activeCounter: number, public inactiveCounter: number) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.activeCounter = 0;
    this.inactiveCounter = 0;
  }

  addActiveCount() {
    this.activeCounter++;
  }

  addInactiveCount() {
    this.inactiveCounter++;
  }
}
