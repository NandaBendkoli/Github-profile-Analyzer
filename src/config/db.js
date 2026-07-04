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
// await db.execute(`CREATE DATABASE github_profile_analyzer;`);

// creating the table
// await db.execute(`
//     CREATE TABLE github_profiles (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) UNIQUE NOT NULL,
//     name VARCHAR(255),
//     bio TEXT,
//     followers INT,
//     following INT,
//     public_repos INT,
//     public_gists INT,
//     avatar_url VARCHAR(255),
//     profile_url VARCHAR(255),
//     company VARCHAR(255),
//     location VARCHAR(255),
//     github_created_at DATETIME,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
// `)


export default db;