import { HomeRouter } from "./app/routes/home.routes";
import bodyParser from "body-parser";
import { connect } from "./db/connect";
require('dotenv').config();

const colors = require('colors');
const express = require('express');
const app = express();
const port = process.env.PORT;



// Routes -----------------------------------
app.use('/', HomeRouter);

app.use(express.static('public'));
app.use(bodyParser.json());


connect();


app.listen(port, () => {
    console.log(colors.underline.green(`App is listening on port:${port}`));
})