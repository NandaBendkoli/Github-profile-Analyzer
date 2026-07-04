import express from "express";
import env from "dotenv";
import chalk from "chalk";
import db from "./src/config/db.js";
env.config();

const PORT = process.env.PORT || 8000;


const app = express();

// json body
app.use(express.json());

// database
db


// routes


app.listen(PORT, () => {
    console.log(chalk.bgMagenta(`App is running on ${PORT} http://localhost:${PORT}/`));
})