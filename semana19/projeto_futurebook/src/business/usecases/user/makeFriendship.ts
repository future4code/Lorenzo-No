import { UserGateway } from "../../gateways/userGateway";
import * as jwt from "jsonwebtoken";

export class MakeFriendshipUC {
  constructor(private userGateway: UserGateway) { }

  public async execute(input: MakeFriendshipUCInput): Promise<MakeFriendshipUCOutput | undefined> {
    try {
      if (!input.token) {
        throw new Error("Unauthorized")
      }

      const userId = jwt.verify(input.token as string, "I'm the king of my own land") as string

      await this.userGateway.makeFriendship(userId, input.friendId)

      return {
        message: "New friend added"
      }
    } catch (err) {
      throw new Error(`Error: failed to add friend. ${err}`)
    }
  }
}

export interface MakeFriendshipUCInput {
  token: string,
  friendId: string
}

export interface MakeFriendshipUCOutput {
  message: string
}