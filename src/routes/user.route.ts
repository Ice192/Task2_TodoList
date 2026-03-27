import express from "express";
import { registerUser } from "../controllers/user.controller";
import { loginUser } from "../controllers/user.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser);

//Tes middleware
router.get("/me", protect, (req: any, res) => {
  res.json({ user: req.user });
});
export default router