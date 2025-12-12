# Rydio Car Rental System

![Rydio Preview](imgs/preview.png)

<div align="center">

  <h3>Next-gen fleet. Instant drive.</h3>

  <p>
    A comprehensive full-stack car rental platform featuring a customer booking interface,
    admin dashboard, and secure payment processing.
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## 🌟 Features

### 🚗 Customer Portal
- **Browse Fleet**: View available cars with detailed specifications and pricing.
- **Instant Booking**: Seamless booking process with date selection.
- **Secure Payments**: Integrated Stripe checkout for safe transactions.
- **User Accounts**: Manage bookings and profile history.

### 🛡️ Admin Dashboard
- **Fleet Management**: Add, update, or remove vehicles.
- **Booking Oversight**: View and manage all customer reservations.
- **User Management**: Monitor registered users.

## 💻 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Payments** | Stripe API |
| **Auth** | JWT (JSON Web Tokens) |

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas connection string)

### 1. Backend Configuration

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the server:

```bash
npm start
```

### 2. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

### 3. Admin Panel Setup

Navigate to the admin directory:

```bash
cd admin
npm install
```

Start the admin server:

```bash
npm run dev
```

## License

MIT
