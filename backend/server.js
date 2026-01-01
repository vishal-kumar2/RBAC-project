import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

/* =====================================================
   CORS CONFIG (MUST BE BEFORE ROUTES)
===================================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "https://rbac-project-psi.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// ✅ Apply SAME CORS config everywhere
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // 🔥 REQUIRED for preflight

/* =====================================================
   BODY PARSER
===================================================== */
app.use(express.json());

/* =====================================================
   ROUTES
===================================================== */
app.use("/api/users", userRoutes);

/* =====================================================
   ROOT ROUTE
===================================================== */
app.get("/", (req, res) => {
  res.send("RBAC Backend API Running...");
});

/* =====================================================
   DATABASE
===================================================== */
connectDB();

/* =====================================================
   SERVER
===================================================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
