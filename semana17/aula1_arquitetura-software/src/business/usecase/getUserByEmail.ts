import { User } from "../entities/user";

export class GetUserByEmailUC {
  public async execute(
    input: GetUserByEmailUCInput
  ): Promise<GetUserByEmailUCOutput> {
    if (!(input.email && input.email.indexOf("@") !== -1)) {
      throw new Error("Invalid email");
    }

    const user = new User("", "", "", new Date());

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      birthDate: user.getBirthDate()
    };
  }
}

export interface GetUserByEmailUCInput {
  email: string;
}

export interface GetUserByEmailUCOutput {
  id: string;
  email: string;
  name: string;
  birthDate: Date;
}
