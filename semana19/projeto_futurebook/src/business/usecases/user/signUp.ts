import { UserGateway } from "../../gateways/userGateway";
import { v4 } from "uuid";
import * as bcrypt from "bcrypt";
import { User } from "../../entities/user";

export class SignUpUC {
  constructor(
    private userGateway: UserGateway
  ) { }

  public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
    try {
      const id = v4()

      if (input.password.length < 6) {
        throw new Error("Minimum password length is 6")
      } else if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid email")
      } else {
        const hashPassword = await bcrypt.hash(input.password, 15)

        const user = new User(
          id,
          input.name,
          input.email,
          hashPassword
        )

        await this.userGateway.signUp(user)

        return {
          message: "User created successfully"
        }
      }
    } catch (err) {
      console.log(err)
      throw new Error(`Error: failed to register user. ${err}`)
    }
  }
}

export interface SignUpUCInput {
  name: string,
  email: string,
  password: string
}

export interface SignUpUCOutput {
  message: string
}