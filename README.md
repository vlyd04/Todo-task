# MERN TODO-APP

A simple and functional Todo App built with the MERN stack (MongoDB, Express, React, Node.js). It supports adding, viewing, updating, filtering (All / Completed / Pending), and deleting todos.

## 🚀 Features

- Add new todos
- View all todos
- Mark todos as completed
- Delete todos
- Filter by All / Completed / Pending
- Loading spinner while fetching data
- Tailwind CSS for styling


## 📁 Project Structure

server/ ├── models/
        │ └── Todo.js
        ├── routes/ 
        │ └── todos.js 
        ├── .env 
        ├── index.js

client/ ├── src/ 
        ├── AddTodo.js  
        ├── TodoItem.js  
        |── TodoList.js 
        ├── App.js 
        │── index.js 
        ├── tailwind.config.js 
        ├── postcss.config.js

---

## 🛠️ Setup Instructions

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally
- Git

## 🔧 Installation

### 1. Clone the Repository

bash
git clone https://github.com/your-username/todo-task.git
cd todo-task

## 2. Setup Backend

cd server
npm install
create a .env file in the server folder:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tododb
npm start

## 3. Setup Frontend

cd ../client
npm install
npm start

http://localhost:3000

Ensure MongoDB is running (mongod) on your system.
The backend runs on port 5000 and the frontend on 3000.

## 4. Screenshots
![Screenshot 2025-04-23 165304](https://github.com/user-attachments/assets/da92f1f3-7602-4e7e-a263-7611ebf1c0c0)
![Screenshot 2025-04-23 165313](https://github.com/user-attachments/assets/24c03503-51b3-4443-9611-2d0b8230ad84)
![Screenshot 2025-04-23 165323](https://github.com/user-attachments/assets/d25ccb71-39a4-4a58-aa44-ec66cfbd6497)
![Screenshot 2025-04-23 165334](https://github.com/user-attachments/assets/5e78b292-440c-4ff6-885e-092368b82dca)






## Lincense

This project is open source and available under the MIT License.


