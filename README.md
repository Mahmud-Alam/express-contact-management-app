# Contact Management App

## 📌 Project Overview

The **Contact Management App** is a backend application built with **Node.js**, **Express.js**, and **MongoDB Atlas**. It allows users to securely manage their contacts through a RESTful API, with JWT-based authentication and password hashing using **bcrypt**. The app supports CRUD operations for contacts and includes a secure user registration/login system.

---

## 🚀 Features

- **User Registration & Login**: Users can create an account and log in to access contact management features.
- **Contact Management**: Users can create, update, delete, and view their contacts.
- **JWT Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Password Encryption**: User passwords are hashed with **bcrypt** for security.
- **Error Handling**: Centralized error handling for API responses.
- **Environment Configuration**: Easy configuration using **dotenv** for managing environment variables.

---

## 🏗️ Project Structure

```
CONTACT-MANAGEMENT-APP
│
├── config/
│   └── dbConnection.js                # MongoDB database connection setup
│
├── controllers/
│   ├── contactController.js            # CRUD operations for contacts
│   └── userController.js               # User registration, login, and details logic
│
├── middleware/
│   ├── errorHandler.js                 # Global error handler for API responses
│   └── validateTokenHandler.js         # Middleware to validate JWT tokens for user authentication
│
├── models/
│   ├── contactModel.js                 # Contact schema and model
│   └── userModel.js                    # User schema and model
│
├── routes/
│   ├── contactRoutes.js                # Routes for contact-related API endpoints
│   └── userRoutes.js                   # Routes for user-related API endpoints
│
├── .env                                # Environment variables
├── constants.js                        # HTTP STATUS CODES
├── index.js                            # Entry point for the app
└── package.json                        # Project dependencies and scripts
```

---

## 🔧 Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)

### Steps to Set Up Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Mahmud-Alam/express-contact-management-app.git
   cd express-contact-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory with the following content:

   ```bash
   PORT=5001
   CONNECTION_STRING=mongodb+srv://<DATABASE_USERNAME>:<DATABASE_PASSWORD>@<MONGODB_CLUSTER_NAME>.dfqpg.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority&appName=<MONGODB_CLUSTER_NAME>
   ACCESS_TOKEN_SECRET=<ACCESS_TOKEN_SECRET_KEY>
   ```

   Replace the placeholder values with your actual MongoDB connection details and secret key.

4. Start the server in development mode (with auto-reloading using `nodemon`):

   ```bash
   npm run dev
   ```

   The server will be available at `http://localhost:5001`.

---

## 🌐 API Documentation

### User Authentication Endpoints

- **POST** `/api/users/register`: Registers a new user.
  - Request body:
    ```json
    {
      "username": "Md Mahmud Alam",
      "email": "mahmud@mahmudalam.com",
      "password": "password123"
    }
    ```

- **POST** `/api/users/login`: Logs in a user and returns a JWT token.
  - Request body:
    ```json
    {
      "email": "mahmud@mahmudalam.com",
      "password": "password123"
    }
    ```

- **GET** `/api/users/current`: Get current user details (requires JWT token in the Authorization header).

### Contact Management Endpoints

- **GET** `/api/contacts`: Get all contacts (requires JWT token).
- **GET** `/api/contacts/:id`: Get a specific contact by ID (requires JWT token).
- **POST** `/api/contacts`: Add a new contact (requires JWT token).
  - Request body:
    ```json
    {
      "name": "Dr. Mahmud",
      "email": "dr@mahmudalam.com",
      "phone": "+1234567890"
    }
    ```

- **PUT** `/api/contacts/:id`: Update a contact by ID (requires JWT token).
  - Request body (example):
    ```json
    {
      "name": "Dr. Mahmud",
      "email": "drmahmud@mahmudalam.com",
      "phone": "+0987654321"
    }
    ```

- **DELETE** `/api/contacts/:id`: Delete a contact by ID (requires JWT token).

---

## 🔧 Running the App

To run the app in development mode (with auto-reload), use:

```bash
npm run dev
```

To run the app in production mode, use:

```bash
npm start
```

The app will be available at `http://localhost:5001`.

---

## 🌐 Deployment

If you would like to deploy this backend app to a cloud platform (e.g., **Heroku**, **AWS**, **DigitalOcean**), make sure to configure the environment variables as mentioned above.

---

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **bcrypt** - For hashing passwords
- **jsonwebtoken (JWT)** - For secure user authentication
- **dotenv** - For managing environment variables
- **Nodemon** - For automatic server restart during development
- **Mongoose** - For MongoDB object modeling

---

## 🏆 Author

**Mahmud Alam**  
- Portfolio Website: [Mahmud Alam](https://mahmudalam.com/)
- 📧 Email: mahmudalam.official@gmail.com
- 🔗 **GitHub Profile**: [GitHub](https://github.com/Mahmud-Alam)
- 🔗 **LinkedIn Profile:** [LinkedIn](https://www.linkedin.com/in/mahmudalamofficial/)

---

## 🎉 Acknowledgments

- Thanks to **MongoDB Atlas** for providing a reliable, cloud-based database solution.
- Thanks to **bcrypt** and **jsonwebtoken** for enabling secure password management and authentication.

---

### Enjoy building! 🚀