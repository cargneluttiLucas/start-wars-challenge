export class User {
  public name: string;
  public lastName: string;
  public userName: string;
  public pass: string;

  constructor(
    name?: string,
    lastName?: string,
    userName?: string,
    pass?: string,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.pass = pass;
  }
}
