import express from "express";
import { createTodoHandler } from "../controllers/todo.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createTodoHandler);

export default router;