### Mini SaaS Subscription App

This is a simplified, subscription-based content platform built using the MERN stack. It allows users to sign up, log in, and access a content catalog. The application enforces role-based access control, where free users can only view free content, while premium users can access all content after a mock payment.

***

### Features

* **User Authentication**: Secure signup and login with JWT (JSON Web Tokens).
* **Role-Based Access Control**: Differentiates between 'free' and 'premium' users.
* **Content Catalog**: Displays a list of articles filtered by the user's subscription status.
* **User Profile**: A dedicated page to show the user's subscription status.
* **Mock Payment Simulation**: A mock checkout process that upgrades a user's role to premium.
* **Persistent Data**: All user and content data is stored in a MongoDB database.

***

### Tech Stack

* **Backend**: Node.js, Express.js, Mongoose, JWT, bcryptjs, cors, dotenv.
* **Frontend**: React.js, React Router, Axios.
* **Database**: MongoDB.

***

### Getting Started

Follow these steps to set up and run the project locally.

#### Prerequisites

* Node.js (v18 or higher)
* MongoDB (local installation or cloud service like MongoDB Atlas)

#### 1. Backend Setup

1.  Navigate to the `backend` directory.
    ```bash
    cd backend
    ```
2.  Install backend dependencies.
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory with the following variables:
    ```
    # .env
    DATABASE_URL=your_mongodb_connection_string
    JWT_SECRET=a_strong_random_secret_key
    ```
4.  Run the database seeder script to populate the database with initial content.
    ```bash
    node seed.js
    ```
5.  Start the backend server.
    ```bash
    node server.js
    ```
    The server will run on `http://localhost:5000`.

#### 2. Frontend Setup

1.  Open a new terminal and navigate to the `frontend` directory.
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies.
    ```bash
    npm install
    ```
3.  Start the React development server.
    ```bash
    npm start
    ```
    The frontend will run on `http://localhost:3000`.

***

### API Endpoints

The backend provides a RESTful API for all application functionality.

| Endpoint | Method | Description | Example Request |
| :--- | :--- | :--- | :--- |
| `/api/signup` | `POST` | Creates a new user with a default 'free' role. | `{"username": "testuser", "email": "test@example.com", "password": "password123"}` |
| `/api/login` | `POST` | Authenticates a user and returns a JWT token. | `{"email": "test@example.com", "password": "password123"}` |
| `/api/content` | `GET` | Returns content filtered by user role. Protected route. | (Header) `Authorization: Bearer <token>` |
| `/api/profile` | `GET` | Returns the authenticated user's profile details and role. Protected route. | (Header) `Authorization: Bearer <token>` |
| `/api/checkout` | `POST` | Simulates a payment and upgrades the user's role to 'premium'. Protected route. | (Header) `Authorization: Bearer <token>` |

***

### Database Schema

#### `User` Collection
* `username`: String (unique, required)
* `email`: String (unique, required)
* `password`: String (required)
* `role`: String (default: 'free', enum: 'free' or 'premium')

#### `Content` Collection
* `title`: String (required)
* `body`: String (required)
* `type`: String (default: 'free', enum: 'free' or 'premium')

***

### Live Demo & Repository

* **Deployed Frontend**: https://mini-saas-frontend.vercel.app/catalog
* ### Mini SaaS Subscription App

This is a simplified, subscription-based content platform built using the MERN stack. It allows users to sign up, log in, and access a content catalog. The application enforces role-based access control, where free users can only view free content, while premium users can access all content after a mock payment.

***

### Features

* **User Authentication**: Secure signup and login with JWT (JSON Web Tokens).
* **Role-Based Access Control**: Differentiates between 'free' and 'premium' users.
* **Content Catalog**: Displays a list of articles filtered by the user's subscription status.
* **User Profile**: A dedicated page to show the user's subscription status.
* **Mock Payment Simulation**: A mock checkout process that upgrades a user's role to premium.
* **Persistent Data**: All user and content data is stored in a MongoDB database.

***

### Tech Stack

* **Backend**: Node.js, Express.js, Mongoose, JWT, bcryptjs, cors, dotenv.
* **Frontend**: React.js, React Router, Axios.
* **Database**: MongoDB.

***

### Getting Started

Follow these steps to set up and run the project locally.

#### Prerequisites

* Node.js (v18 or higher)
* MongoDB (local installation or cloud service like MongoDB Atlas)

#### 1. Backend Setup

1.  Navigate to the `backend` directory.
    ```bash
    cd backend
    ```
2.  Install backend dependencies.
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory with the following variables:
    ```
    # .env
    DATABASE_URL=your_mongodb_connection_string
    JWT_SECRET=a_strong_random_secret_key
    ```
4.  Run the database seeder script to populate the database with initial content.
    ```bash
    node seed.js
    ```
5.  Start the backend server.
    ```bash
    node server.js
    ```
    The server will run on `http://localhost:5000`.

#### 2. Frontend Setup

1.  Open a new terminal and navigate to the `frontend` directory.
    ```bash
    cd frontend
    ```
2.  Install frontend dependencies.
    ```bash
    npm install
    ```
3.  Start the React development server.
    ```bash
    npm start
    ```
    The frontend will run on `http://localhost:3000`.

***

### API Endpoints

The backend provides a RESTful API for all application functionality.

| Endpoint | Method | Description | Example Request |
| :--- | :--- | :--- | :--- |
| `/api/signup` | `POST` | Creates a new user with a default 'free' role. | `{"username": "testuser", "email": "test@example.com", "password": "password123"}` |
| `/api/login` | `POST` | Authenticates a user and returns a JWT token. | `{"email": "test@example.com", "password": "password123"}` |
| `/api/content` | `GET` | Returns content filtered by user role. Protected route. | (Header) `Authorization: Bearer <token>` |
| `/api/profile` | `GET` | Returns the authenticated user's profile details and role. Protected route. | (Header) `Authorization: Bearer <token>` |
| `/api/checkout` | `POST` | Simulates a payment and upgrades the user's role to 'premium'. Protected route. | (Header) `Authorization: Bearer <token>` |

***

### Database Schema

#### `User` Collection
* `username`: String (unique, required)
* `email`: String (unique, required)
* `password`: String (required)
* `role`: String (default: 'free', enum: 'free' or 'premium')

#### `Content` Collection
* `title`: String (required)
* `body`: String (required)
* `type`: String (default: 'free', enum: 'free' or 'premium')

***

### Live Demo & Repository

* **Deployed Frontend**: https://mini-saas-frontend.vercel.app/catalog
* **GitHub Frontend**: https://github.com/h4rsh003/mini_saas_frontend
* **GitHub Backend**: https://github.com/h4rsh003/mini_saas_backend
