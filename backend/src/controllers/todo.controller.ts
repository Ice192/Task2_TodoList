import { Request, Response } from "express";
import { createTodo, deleteTodo, updateTodo, getTodoByUser } from "../utils/todo.service";

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
    const page = Number(req.query.page)
    const limit = Number(req.query.limit) //karena GET menggunakan query (?page, ?limit)

    const finalPage = isNaN(page) || page < 1 ? 1 : page; //Jika page bukan angka atau kurang dari 1, maka gunakan 1, jika tidak gunakan nilai page.
    const finalLimit = isNaN(limit) || limit < 1 ? 10 : limit; //Jika limit bukan angka atau kurang dari 1, maka gunakan 10, jika tidak gunakan nilai limit.

    const todos = await getTodoByUser(
      req.user.id,
      finalPage,
      finalLimit
    )

    res.json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).json({massage:"Error Fetching todos"})
  }
}

// export const getTodosHandler = async (req: any, res: Response) => {
//   try {
//     const todos = await getTodoByUser(req.user.id)

//     res.json(todos)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({massage:"Error Fetching todos"})
//   }
// }

// Menghandle Request delete dari client
export const delTodosHandler = async (req: any, res: Response) => {
  try {
    const {id} = req.params

    const deletedTodo = await deleteTodo (id, req.user.id)

    if (!deletedTodo) {
      return res.status(404).json({message: "Todo not Found"})
    }

    res.json({masssage:"Delete Todo Successfully"})
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "Error Deleting Todo"})
  }
}

//Menghandle update 
export const upTodoshandler = async (req: any, res: Response) => {
  try {
    const {id} = req.params

    const updatedTodo = await updateTodo(
      id,
      req.user.id,
      req.body
    )

    if (!updatedTodo){
      return res.status(404).json({message:"Todo not found"})
    }

    res.json(updateTodo)
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"Error Updating Todo"})
  }
}
