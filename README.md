# task-manager-backend


## Overview
This is the backend of the Task Manager application, built using **Node.js** and **Express.js**, with **MongoDB** as the database.

## Features
- User authentication (Register, Login, JWT-based authentication)
- CRUD operations for tasks (Create, Read, Update, Delete)
- Task categorization and priority levels
- Mark tasks as completed or pending
- Search tasks by title
- CORS enabled for frontend communication

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs
- **Middleware**: Express.js, CORS

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **MongoDB** (Local or Atlas cloud database)

### Steps to Run Locally
1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd task-manager-backend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory and add the following:
     ```sh
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. **Run the server**
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:5000/`

## API Endpoints
### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user

### Task Routes (`/api/tasks`)
- `POST /` - Create a new task
- `GET /` - Get all tasks
- `GET /:id` - Get a single task
- `PUT /:id` - Update a task
- `DELETE /:id` - Delete a task

## Deployment
For production, use:
```sh
npm run start
```
Ensure that the **MONGO_URI** is updated with the production database.

## Troubleshooting
- **CORS issues**: Make sure your frontend URL is whitelisted in the backend CORS configuration.
- **MongoDB connection issues**: Verify your `MONGO_URI` in `.env`.
- **JWT authentication issues**: Ensure `JWT_SECRET` is correctly set in `.env`.

## License
This project is licensed under the MIT License.

