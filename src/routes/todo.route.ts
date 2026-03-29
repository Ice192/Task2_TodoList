import express from "express";
import { createTodoHandler, getTodosHandler, delTodosHandler, upTodoshandler} from "../controllers/todo.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, createTodoHandler);
router.get("/", protect, getTodosHandler);
router.delete("/:id", protect, delTodosHandler);
router.put("/:id", protect, upTodoshandler);

export default router;
