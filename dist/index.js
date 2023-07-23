"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Cool, it is running! Or is it?");
});
app.listen(port, () => {
    console.log("Yup! My Express Server is running on Port", port);
});