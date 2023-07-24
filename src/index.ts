// const connectWithMongo = require("./mongo/index");
import express, { Application, Request, Response } from "express";
import Contact, { IContact } from "./mondals/contact";
const connectWithMongoose = require("./config/mongooseConnect/index");
require("dotenv").config();
const app: Application = express();
const port: number = parseInt(process.env.PORT ?? "3000");

app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Cool, it is running! Or is it?");
});

app.post("/create-contact", (req, res) => {
  console.log(req.body);

  Contact.create({
    name: req.body.name,
    phone: req.body.phone,
  })
    .then((newContact) => {
      return res.redirect("back");
    })
    .catch((err: Error) => {
      console.log(err);
      return;
    });
});

app.get("/contact", (req, res) => {
  Contact.find({})
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/delete-contact", (req, res) => {
  let contactId = req.query.id;
  Contact.findByIdAndDelete(contactId)
    .then((data) => {
      return res.send("Successfuly delete");
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
