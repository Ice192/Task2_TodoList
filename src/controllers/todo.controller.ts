import { Request, Response } from "express";
import { createTodo } from "../utils/todo.service";
import { getTodoByUser } from "../utils/todo.service";

export const createTodoHandler = async (req: any, res: Response) => {
  try {
    const { title } = req.body;

    const todo = await createTodo(title, req.user.id);

    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating todo" });
  }
};

export const getTodosHandler = async (req: any, res: Response) => {
  try {
    const todos = await getTodoByUser(req.user.id)

    res.json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).json({massage:"Error Fetching todos"})
  }
}
