# JUSTDO - A Modern To-Do List Application

Welcome to **JUSTDO**, a sleek and powerful to-do list application built with the MERN stack. This application features a stunning, animated "Cosmic Aurora" theme, providing a beautiful and engaging user experience for managing daily tasks.

## 📂 Project Structure

The project is organized into two main directories:

-   **/my-app**: The Frontend application built with React.
-   **/Backend**: The Backend server built with Node.js, Express, and MongoDB.


JUSTDO_PROJECT/
├── Backend/
│   ├── conn/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── App.js
│   └── package.json
|
|
|
|--my-app(fronend)/
├── public/
├── src/
│   ├── components/
│   ├── store/
│   ├── App.js
│   └── index.js
├── node_modules/
└── package.json


## ✨ Features

* **User Authentication**: Secure user registration and login system with password hashing.
* **Smart Redirect**: If a user tries to log in without an account, they are automatically redirected to the signup page.
* **Full CRUD Functionality**: Create, Read, Update, and Delete tasks seamlessly.
* **Responsive Design**: A beautiful and consistent user interface that works on all devices, from mobile to desktop.
* **State Management**: Centralized state management using Redux Toolkit for a predictable and scalable application state.
* **Interactive UI**:
    * Stunning "Cosmic Aurora" animated background.
    * Modern "frosted glass" (glassmorphism) effect on UI elements.
    * Dynamic hover effects and notifications for an enhanced user experience.
* **RESTful API**: A well-structured backend API built with Node.js and Express for handling all application logic.

## 🛠️ Tech Stack

### Frontend
* **React.js**: For building the user interface.
* **Redux Toolkit**: For efficient and predictable state management.
* **React Router DOM**: For handling client-side routing.
* **Axios**: For making HTTP requests to the backend API.
* **React-Toastify**: For displaying beautiful, non-blocking notifications.
* **React Icons**: For including a wide range of icons.
* **CSS**: Custom CSS for the unique "Cosmic Aurora" theme.

### Backend
* **Node.js**: As the JavaScript runtime environment.
* **Express.js**: As the web application framework.
* **MongoDB**: As the NoSQL database for storing user and task data.
* **Mongoose**: As the Object Data Modeling (ODM) library for MongoDB.
* **Bcrypt.js**: For hashing user passwords securely.
* **CORS**: To enable Cross-Origin Resource Sharing.
* **Dotenv**: For managing environment variables.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* **Node.js** and **npm** (or yarn) installed on your machine.
* A **MongoDB Atlas** account or a local MongoDB instance.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/justdo-app.git](https://github.com/your-username/justdo-app.git)
    cd justdo-app
    ```

2.  **Install Backend Dependencies:**
    Navigate to the `Backend` directory and install the required packages.
    ```sh
    cd Backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    Navigate to the `my-app` (frontend) directory and install the required packages.
    ```sh
    cd ../my-app
    npm install
    ```

### Environment Variables

The backend requires a `.env` file to store your database connection string.

1.  Create a file named `.env` in the `Backend` directory.
2.  Add your MongoDB connection URI to it:
    ```
    MONGO_URI="your_mongodb_connection_string"
    ```

## 🏃 Running the Application

You need to run both the frontend and backend servers concurrently in separate terminals.

1.  **Start the Backend Server:**
    In the `Backend` directory, run:
    ```sh
    node App.js
    ```
    The server will start on `http://localhost:1000`.

2.  **Start the Frontend Development Server:**
    In the `my-app` directory, run:
    ```sh
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## 🚢 Deployment

Here’s a guide to deploying the MERN stack application using popular free-tier services like Render for the backend and Vercel for the frontend.

### Deploying the Backend (Render)

1.  **Push your code to a GitHub repository.**
2.  **Sign up or Log in to [Render](https://render.com/).**
3.  Click **New +** > **Web Service**.
4.  Connect your GitHub repository.
5.  Configure the service:
    * **Name**: `justdo-backend` (or your choice).
    * **Root Directory**: `Backend`
    * **Runtime**: `Node`
    * **Build Command**: `npm install`
    * **Start Command**: `node App.js`
6.  Go to the **Environment** tab and add your `MONGO_URI` as a secret key.
7.  Click **Create Web Service**. Render will deploy your backend. Copy the deployed URL (e.g., `https://justdo-backend.onrender.com`).

### Deploying the Frontend (Vercel)

1.  **Update API calls in your frontend code.**
    In your React components (like `Signin.jsx`, `Todo.jsx`, etc.), replace `http://localhost:1000` with your deployed backend URL. It's best to use an environment variable for this.

2.  **Sign up or Log in to [Vercel](https://vercel.com/).**
3.  Click **Add New...** > **Project**.
4.  Connect your GitHub repository.
5.  Configure the project:
    * **Framework Preset**: `Create React App`
    * **Root Directory**: `my-app`
6.  Go to **Environment Variables** and add a variable named `REACT_APP_API_URL` with the value of your deployed backend URL.
7.  Click **Deploy**. Vercel will build and deploy your frontend.

## 📝 API Endpoints

### Auth Routes (`/api/v1`)
* `POST /register`: Register a new user.
* `POST /signin`: Log in an existing user.

### List Routes (`/api/v2`)
* `POST /addTask`: Add a new task for a user.
* `GET /getTasks/:id`: Get all tasks for a specific user.
* `PUT /updateTask/:id`: Update a specific task.
* `DELETE /deleteTask/:id`: Delete a specific task.

---

Thank you for checking out JUSTDO!
