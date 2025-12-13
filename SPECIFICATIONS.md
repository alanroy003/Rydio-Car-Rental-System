# Project Specifications - Rydio Car Rental System

## 1. System Architecture
- **Pattern**: MVC (Model-View-Controller)
- **Frontend**: Single Page Application (SPA) consuming REST APIs.
- **Backend**: RESTful API server.
- **Database**: NoSQL Document Store.

## 2. Technology Stack
- **Frontend**: React (Vite), Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB, Mongoose ODM.
- **Payment Gateway**: Stripe API.
- **Authentication**: JSON Web Tokens (JWT).

## 3. Database Schema Design (Proposed)

### 3.1 Users Collection
- `_id`: ObjectId
- `username`: String
- `email`: String (Unique)
- `password`: String (Hashed)
- `role`: Enum ['user', 'admin']
- `createdAt`: Date

### 3.2 Cars Collection
- `_id`: ObjectId
- `name`: String
- `model`: String
- `image`: String (URL)
- `pricePerDay`: Number
- `capacity`: Number
- `fuelType`: String
- `bookedTimeSlots`: Array<{from: Date, to: Date}>
- `createdAt`: Date

### 3.3 Bookings Collection
- `_id`: ObjectId
- `car`: ObjectId (Ref: Cars)
- `user`: ObjectId (Ref: Users)
- `bookedTimeSlots`: {from: Date, to: Date}
- `totalAmount`: Number
- `transactionId`: String (Stripe)
- `status`: Enum ['booked', 'cancelled']
- `createdAt`: Date

## 4. API Endpoints

### 4.1 Auth
- `POST /api/users/login` - Authenticate user/admin.
- `POST /api/users/register` - Register new user.

### 4.2 Cars
- `GET /api/cars/getallcars` - Fetch all vehicles (Public).
- `POST /api/cars/addcar` - Add new vehicle (Admin).
- `PUT /api/cars/editcar/:id` - Update vehicle details (Admin).
- `DELETE /api/cars/deletecar/:id` - Remove vehicle (Admin).

### 4.3 Bookings
- `POST /api/bookings/bookcar` - Create a reservation (User).
- `GET /api/bookings/getallbookings` - View all system bookings (Admin).
- `GET /api/bookings/userbookings` - View specific user history (User).