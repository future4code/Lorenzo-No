import { UserGateway } from "../../gateways/userGateway";
import * as jwt from "jsonwebtoken";

export class UndoFriendshipUC {
  constructor(private userGateway: UserGateway) { }

  public async execute(input: UndoFriendshipUCInput): Promise<UndoFriendshipUCOutput | undefined> {
    try {
      if (!input.token) {
        throw new Error("Unauthorized")
      }

      const userId = jwt.verify(input.token as string, "I'm the king of my own land") as string

      await this.userGateway.undoFriendship(userId, input.friendId)

      return {
        message: "Person removed from the friends list"
      }
    } catch (err) {
      throw new Error(`Error: failed to remove from friends list. ${err}`)
    }
  }
}

export interface UndoFriendshipUCInput {
  token: string,
  friendId: string
}

export interface UndoFriendshipUCOutput {
  message: string
}