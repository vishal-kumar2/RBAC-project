import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://rbac-project-psi.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);




app.use(express.json()); // Parse JSON body

/* ================= ROUTES ================= */
app.use("/api/users", userRoutes);

/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("RBAC Backend API Running...");
});

/* ================= DATABASE ================= */
connectDB();

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
