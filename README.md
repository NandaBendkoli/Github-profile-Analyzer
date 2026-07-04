# GitHub Profile Analyzer API

A Node.js + Express.js backend project that analyzes a GitHub user's public profile using the GitHub API 
and stores useful insights in a MySQL database.

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API
- Axios

---

## Features

- Analyze any GitHub profile using username
- Store profile details in MySQL
- Fetch all analyzed profiles
- Fetch a single analyzed profile

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=8989

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_profile_analyzer
```

### 4. Create Database

```sql
CREATE DATABASE github_profile_analyzer;
```

Run the `database/schema.sql` file.

### 5. Start the server

```bash
npm run dev
```

Server will run at:

```
http://localhost:8989
```

---

# API Endpoints

## 1. Analyze GitHub Profile

**POST**

```
/Analyzer/app/v1/analyze
```

Request Body

```json
{
    "username": "NandaBendkoli"
}
```

---

## 2. Get All Profiles

**GET**

```
/Analyzer/app/v1/getAllProfiles
```

---

## 3. Get Single Profile

**GET**

```
/Analyzer/app/v1/getProfile
```

Example

```
/Analyzer/app/v1/profile/NandaBendkoli
```

---

## Project Structure

```
database/
│── schema.sql

src/
│── config/
│── controllers/
│── models/
│── routes/
│── services/
│── utils/

index.js
```

---

## Author

Nanda Bendkoli
