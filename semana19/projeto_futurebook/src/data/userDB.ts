import { BaseDB } from "./baseDB";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";

export class UserDB extends BaseDB implements UserGateway {
  private users = "futurebook_users";
  private relationTableName = "user_relations"

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
}