export class Todo {

  constructor(public id: number,
              public username: string,
              public description: string,
              public targetDate: Date,
              public done: boolean) {
  }
}
