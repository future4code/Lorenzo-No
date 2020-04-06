import { User } from "../entities/user";

export interface UserGateway {
  signUp(user: User): Promise<void>
  getUserByEmail(email: string): Promise<User | undefined>
  makeFriendship(userId: string, friendId: string): Promise<void>
  undoFriendship(userId: string, friendId: string): Promise<void>
}