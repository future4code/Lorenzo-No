export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private birthDate: Date,
    private photoUrl: string
  ) { }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getBirthDate(): Date {
    return this.birthDate;
  }

  public getPhotoUrl(): string {
    return this.photoUrl;
  }
}