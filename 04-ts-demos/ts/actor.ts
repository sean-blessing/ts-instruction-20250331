export class Actor {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public birthDate: Date = new Date(),
    public gender: string = ''
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
  }

  toString(): string {
    return `Actor: id ${this.id}, ${this.lastName}, ${this.firstName} born on ${this.birthDate}, ${this.gender}`;
  }
}
