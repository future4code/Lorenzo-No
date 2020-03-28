import express from "express";
import { SignUpEndpoint } from "./endpoints/user/signUpEndpoint";
import { LoginEndpoint } from "./endpoints/user/loginEndpoint";

const app = express()
app.use(express.json())

app.post("/signup", SignUpEndpoint)
app.post("/login", LoginEndpoint);

export default app;