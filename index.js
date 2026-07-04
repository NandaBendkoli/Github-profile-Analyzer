import express from "express";
import env from "dotenv";
import chalk from "chalk";
import db from "./src/config/db.js";
import routes from "./src/routes/github.route.js";
env.config();

const PORT = process.env.PORT || 8000;


const app = express();

// json body
app.use(express.json());


// routes
app.use("/Analyzer/app/v1",routes);


app.listen(PORT, () => {
    console.log(chalk.bgMagenta(`App is running on ${PORT} http://localhost:${PORT}/`));
})