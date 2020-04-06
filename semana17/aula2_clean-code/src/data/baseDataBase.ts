import knex from "knex";

export abstract class BaseDB {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: "<HOST>",
      port: 3306,
      user: "<USER>",
      password: "<PASSWORD>",
      database: "<DB>"
    }
  });
}
