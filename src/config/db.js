import mysql from "mysql2/promise";
import env from "dotenv";
import chalk from "chalk";
env.config();
const host = process.env.DB_HOST;
const root = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;


const db = await mysql.createConnection({
    host,
    user: root,
    password,
    database
});

if (!db) {
    console.log(chalk.bgRed("Error in Database connection!"));
}

console.log(chalk.bgGreen("Database connection Successfully!"));

// creating the databse
// await db.execute(`create database github_profile_analyzer;`);

export default db;