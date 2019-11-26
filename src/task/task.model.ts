export class Task {
  constructor(
    public userId: string,
    // tslint:disable-next-line: variable-name
    public _id: string,
    public title: string,
    public completed: boolean
  ) {}
}
