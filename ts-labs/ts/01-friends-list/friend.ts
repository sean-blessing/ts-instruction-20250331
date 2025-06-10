export class Friend {
  constructor(
    public name: string = "",
    public age: number = 0,
    public email: string = "",
    public bff: boolean = false
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.bff = bff;
  }
}
