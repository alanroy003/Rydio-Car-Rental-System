# Project Requirement Document (PRD) - Rydio Car Rental System

## 1. Introduction
Rydio is a web-based car rental platform designed to streamline the process of renting vehicles for customers and managing fleet operations for administrators. The system aims to replace manual booking processes with a secure, automated digital solution.

## 2. Objectives
- Provide a seamless, responsive booking experience for customers.
- Automate payment processing via Stripe integration.
- Centralize fleet and reservation management for administrators.
- Ensure data security for user profiles and transaction details.

## 3. User Personas
### 3.1 Customer
- Wants to browse available cars by category, price, or features.
- Needs to book a car for specific dates without conflicts.
- Requires a secure method to pay online.
- Wants to view their booking history and current reservation status.

### 3.2 Administrator
- Needs to add, edit, or remove cars from the fleet.
- Needs to view all active, upcoming, and past bookings.
- Needs to manage user accounts and handle booking cancellations if necessary.

## 4. Functional Requirements

### 4.1 Authentication & Authorization
- **Registration**: Users can sign up with email and password.
- **Login**: Secure login using JWT (JSON Web Tokens).
- **Roles**: Distinct access levels for 'User' and 'Admin'.

### 4.2 Vehicle Management (Admin)
- CRUD operations for vehicles (Image, Name, Model, Price per day, Capacity, Fuel Type).
- Ability to mark cars as unavailable for maintenance.

### 4.3 Booking System
- **Search**: Filter cars based on availability for selected dates.
- **Reservation**: Select start/end dates and calculate total cost.
- **Conflict Resolution**: Prevent double booking for the same vehicle during overlapping time slots.

### 4.4 Payments
- Integration with Stripe for credit/debit card processing.
- Payment status tracking (Pending, Completed, Failed).

### 4.5 Dashboard
- **User Dashboard**: View profile details and booking history.
- **Admin Dashboard**: Overview of total bookings, revenue, fleet status, and user list.

## 5. Non-Functional Requirements
- **Security**: Passwords hashed (bcrypt), API protected via JWT, HTTPS enforced in production.
- **Performance**: Fast load times using Vite for frontend and optimized database queries.
- **Scalability**: Modular backend structure (MVC) to support future feature additions.