"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// const connectWithMongo = require("./mongo/index");
const express_1 = __importDefault(require("express"));
const contact_1 = __importDefault(require("./mondals/contact"));
const connectWithMongoose = require("./config/mongooseConnect/index");
require("dotenv").config();
const app = (0, express_1.default)();
const port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000");
app.use(express_1.default.urlencoded());
app.get("/", (req, res) => {
    res.send("Cool, it is running! Or is it?");
});
app.post("/create-contact", (req, res) => {
    contact_1.default.create({
        name: req.body.name,
        phone: req.body.phone,
    })
        .then((newContact) => {
        console.log("*******", newContact);
        return res.redirect("back");
    })
        .catch((err) => {
        console.log(err);
        return;
    });
});
app.listen(port, () => {
    console.log("Yup! My Express Server is running on Port", port);
});
