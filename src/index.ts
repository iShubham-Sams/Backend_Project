import express, { Application, Request, Response } from "express";
require("dotenv").config();
const port: number = parseInt(process.env.PORT ?? "3000");
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Cool, it is running! Or is it?");
});

app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
