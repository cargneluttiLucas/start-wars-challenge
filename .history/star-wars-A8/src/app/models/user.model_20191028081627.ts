export class User {
  public id: number;
  public name: string;
  public lastName: string;
  public userName: string;
  public pass: number;

  constructor(
    id?: number,
    name?: string,
    lastName?: string,
    userName?: string,
    pass?: number,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.pass = pass;
  }
}
