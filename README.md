# 🛒 Stylish-Wear-Aesthetics – Full Stack E-Commerce Platform

A modern, secure, and role-based shopping website built with a scalable full-stack architecture.  
This project supports **Admin, Staff, Seller, and User dashboards**, real-time product management, secure authentication, and detailed sales analytics.

---

## 🚀 Overview

This shopping website is designed to handle real-world e-commerce requirements with strong security, session management, and role-based access control.  
It provides separate dashboards for **Admin, Staff, Seller, and Users**, ensuring each role has access only to the features they need.

The platform focuses on **security**, **performance**, and **scalability**, using token-based authentication with Redis and MongoDB as the primary database.

---

## 🧰 Tech Stack

### Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Modern, responsive styling

### Backend
- **Node.js & Express.js** – REST API
- **MongoDB (Mongoose)** – Database & schema modeling
- **Redis** – Token storage & session management

### Authentication & Security
- JWT-based authentication
- Secure cookies
- Session timeout handling
- Token invalidation on logout

---

## 🔐 Authentication & Session Management

- Login using **JWT tokens stored securely**
- Tokens are stored and validated via **Redis**
- **Session timeout** automatically logs users out after inactivity
- Once a user **logs out**, the same **token or cookie cannot be reused**
- Prevents multiple logins with invalid or expired sessions
- Secure role-based access control for all APIs

---

## 👥 User Roles & Dashboards

### 👑 Admin Dashboard
- View **total sales**, **total products**, and **monthly sales**
- Manage all users (Admin, Staff, Seller, User)
- Add, update, or remove products
- Full access to analytics and reports

### 🧑‍💼 Staff Dashboard
- View sales statistics
- Manage products (add, update, remove)
- Monitor monthly sales performance

### 🏪 Seller Dashboard
- Add new products
- Update product details
- Remove their own products
- Track product-wise sales data

### 🛍️ User Dashboard
- Browse product listings
- View product details
- Track purchases and activity

---

## 📦 Product Management Features

- 📌 Add new products
- ✏️ Update existing products
- ❌ Remove products
- 🖼️ Dedicated **Product Page** with detailed information
- Real-time product availability updates

---

## 📊 Analytics & Reports

- Total products count
- Total sales amount
- Monthly sales analysis
- Role-based visibility of reports
- Clean and intuitive dashboard UI

---

## 🛡️ Security Features

- Role-based API protection
- Token validation using Redis
- Automatic session expiration
- Logout invalidates tokens immediately
- Cookie & token reuse prevention

---

## 📁 Project Highlights

- Scalable architecture
- Clean UI with Tailwind CSS
- Secure authentication flow
- Real-world session handling
- Modular and maintainable codebase

---

## 🏁 Conclusion

This shopping website demonstrates a **production-ready e-commerce system** with strong authentication, session control, and role-based dashboards.  
It is suitable for learning, scaling, or deploying as a real-world application.

---

## 👨‍💻 Author
**Shubham Kumar**  
Full-Stack Developer | Competitive Programming Enthusiast
