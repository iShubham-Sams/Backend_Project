// const connectWithMongo = require("./mongo/index");
import express, { Application, Request, Response } from "express";
const connectWithMongoose = require("./config/mongoose");
require("dotenv").config();
const app: Application = express();

const port: number = parseInt(process.env.PORT ?? "3000");
app.get("/", (req: Request, res: Response) => {
  res.send("Cool, it is running! Or is it?");
});
app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
