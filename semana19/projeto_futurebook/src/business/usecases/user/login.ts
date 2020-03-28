import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class LoginUC {
  constructor(
    private userGateway: UserGateway
  ) { }

  public async execute(input: LoginUCInput): Promise<LoginUCOutput> {

    if (!(input.email && input.email.indexOf("@") !== -1)) {
      throw new Error("Invalid email")
    }

    const user = await this.userGateway.getUserByEmail(input.email)

    if (!user) {
      throw new Error("User not found")
    }

    const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

    if (!isPasswordCorrect) {
      throw new Error("Invalid email or password")
    }

    const token = jwt.sign({ id: user.getId() }, "I'm the king of my own land", { // secretOrPrivateKey pode ser process.env.JWT_SECRET as string
      expiresIn: '1h'
    })

    return {
      message: "User logged successfully",
      token: token
    }
  }
}

export interface LoginUCInput {
  email: string,
  password: string
}

export interface LoginUCOutput {
  message: string,
  token: string
}