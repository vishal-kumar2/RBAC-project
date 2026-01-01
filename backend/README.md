# 🔐 RBAC Backend – Node.js & Express

A secure Role-Based Access Control (RBAC) backend built with Node.js, Express, MongoDB, and JWT, designed with real-world authorization rules and admin safety constraints.

This backend powers user authentication, role management, and admin-only operations with strict security guarantees.


## 🚀 Features

✅ User registration & login (JWT-based authentication)

✅ Role-Based Access Control (RBAC)

✅ Automatic first-user admin bootstrap

✅ Admin-only APIs

✅ Role management (admin, user, manager)

✅ Prevents:

- Admin self-demotion

- System from having zero admins

✅ Secure password hashing with bcrypt

✅ Production-ready structure
## 🛠 Tech Stack

* Node.js

* Express.js

* MongoDB + Mongoose

* JWT (jsonwebtoken)

* bcryptjs

* dotenv

* cors
## Folder Structure
```
backend/
├── controllers/
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   └── checkRole.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── server.js
├── .env
└── README.md
```

## 🔐 Authentication & RBAC Logic

🔹 User Registration

* Users do not send role

* First registered user becomes admin automatically

* All subsequent users are assigned user role

🔹 Role Enforcement

- Role is embedded in JWT

- Protected routes check:

- Authentication

- Authorization (role)
## Routes
### 🔓 Public Routes
| Method | Endpoint              | Description   |
| ------ | --------------------- | ------------- |
| POST   | `/api/users/register` | Register user |
| POST   | `/api/users/login`    | Login user    |

### 🔐 Protected Routes (Auth Required)
| Method | Endpoint                           | Access         |
| ------ | ---------------------------------- | -------------- |
| GET    | `/api/users/profile`               | Logged-in user |
| GET    | `/api/users/admin/users`           | Admin only     |
| PUT    | `/api/users/admin/change-role/:id` | Admin only     |
| POST   | `/api/users/admin/register`        | Admin only     |

## 🛡 Admin Safety Rules (Important)

❌ LoggedIn Admin cannot demote himself

❌ System cannot have zero admins

✅ Only admins can create other admins

✅ Role changes validated on backend
## ⚙️ Environment Variables
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/rbac
JWT_SECRET=your_super_secret_key
```

## 📌 Future Improvements


* Permission-based RBAC

* Audit logs for role changes

* Refresh token support

* Rate limiting & security headers

* Email verification

## 👨‍💻 Author

```
Vishal
B.Tech – Electronics & Communication Engineering
Backend & Full-Stack Developer
```