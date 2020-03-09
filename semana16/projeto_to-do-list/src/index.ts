import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';
require('dotenv').config()

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/createUser/': 'cadastra um novo usuário'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});

app.post('/createUser/', async (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('users')
  try {
    const result = await nonQuery;
    res.send(`O usuário ${req.body.name} foi criado.`);
  } catch (error) {
    res.send(error)
  }
});