import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
  changeUserRole,
  registerAdmin,
} from "../controllers/userController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/checkRole.js";

const router = express.Router();

/* ================= PUBLIC ================= */
router.post("/register", registerUser);
router.post("/login", loginUser);

/* ================= PROTECTED ================= */
router.get(
  "/profile", 
  authMiddleware, 
  getProfile
);

/* ================= ADMIN (RBAC) ================= */
router.get(
  "/admin/users",
  authMiddleware,
  checkRole("admin"),
  getAllUsers
);

router.post(
  "/admin/register",
  authMiddleware,
  checkRole("admin"),
  registerAdmin
);


router.put(
  "/admin/change-role/:id",
  authMiddleware,
  checkRole("admin"),
  changeUserRole
);

export default router;
