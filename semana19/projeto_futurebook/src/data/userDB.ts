import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";

export class UserDB extends BaseDB implements UserGateway {
  private users = "futurebook_users";
  private relations = "user_relations"

  private mapDBUserToUser(input?: any): User | undefined {
    return (
      input &&
      new User(
        input.id,
        input.name,
        input.email,
        input.password
      )
    )
  }

  public async signUp(user: User): Promise<void> {
    await this.connection.raw(`
        INSERT INTO ${this.users} (id, name, email, password)
        VALUES(
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            '${user.getPassword()}'
        );
    `);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
        SELECT *
        FROM ${this.users}
        WHERE email='${email}';
    `)

    if (!result[0][0]) {
      return undefined;
    }

    return this.mapDBUserToUser(result[0][0])
  }

  public async makeFriendship(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.relations} (user_id, friend_id) 
      VALUES
        ('${userId}','${friendId}'),
        ('${friendId}','${userId}');
      `)
  }

  public async undoFriendship(userId: string, friendId: string): Promise<void> {
    await this.connection.raw(`
      DELETE FROM ${this.relations}
      WHERE user_id = '${userId}'
      AND friend_id = '${friendId}';
    `)

    await this.connection.raw(`
      DELETE FROM ${this.relations}
      WHERE user_id = '${friendId}'
      AND friend_id = '${userId}';
  `)
  }
}