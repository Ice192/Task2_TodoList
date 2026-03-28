import express from "express";
import { createTodoHandler } from "../controllers/todo.controller";
import { getTodosHandler } from "../controllers/todo.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createTodoHandler);
router.get("/", protect, getTodosHandler);

export default router;