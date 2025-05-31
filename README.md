# 🗳️ Simple Voting System (Full Stack)

A basic full-stack voting system using **React JS**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MySQL (XAMPP)** with login authentication.

---

## 🔧 Features

- ✅ User Registration & Login (Session-based)
- 🗳️ Vote for your favorite candidate (once per user)
- 🛡️ Authentication & session management
- 💾 All data stored locally using MySQL (via XAMPP)
- 🎨 Simple responsive UI using Tailwind CSS

---

## 📁 Project Structure

```
voting-system/
├── client/        # Frontend (React + Tailwind)
├── server/        # Backend (Node.js + Express)
│   └── db.sql     # SQL script to create database and tables
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm
- XAMPP (with MySQL)
- Git

---

### 📦 Backend Setup (Node.js + Express)

1. Open terminal and navigate to the `server` folder
2. Run:
   ```bash
   npm install
   node server.js
   ```
3. The backend will start on `http://localhost:5000`

---

### 🎨 Frontend Setup (React + Tailwind CSS)

1. Open terminal and navigate to the `client` folder
2. Run:
   ```bash
   npm install
   npm start
   ```
3. Frontend will run at `http://localhost:3000`

---

### 🛠️ MySQL Setup (XAMPP)

1. Start Apache and MySQL using XAMPP
2. Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin)
3. Import the `db.sql` file from the `server` folder to create:
   - Database: `voting_db`
   - Tables: `users`, `votes`

---

## 💡 Default Flow

1. User registers with a username and password
2. User logs in and is authenticated
3. After login, user can vote for a candidate
4. Each user can vote only once

---

## 📷 Screenshots

votingSystemPreview.png

---

## 📜 License

This project is open source and free to use for educational purposes.

---


