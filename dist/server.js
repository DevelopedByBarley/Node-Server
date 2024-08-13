"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = require("./app/routes/home.routes");
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = require("./db/connect");
require('dotenv').config();
const colors = require('colors');
const express = require('express');
const app = express();
const port = process.env.PORT;
// Routes -----------------------------------
app.use('/', home_routes_1.HomeRouter);
app.use(express.static('public'));
app.use(body_parser_1.default.json());
(0, connect_1.connect)();
app.listen(port, () => {
    console.log(colors.underline.green(`App is listening on port:${port}`));
});
