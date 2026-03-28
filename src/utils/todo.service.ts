
import { Todo } from "../models/todo.models";

export const createTodo = async (text: string, userId: string) => {
    return await Todo.create({
        text,
        user: userId,
    })
}

export const getTodoByUser = async (userID: string) => {
    return await Todo.find({user: userID}).sort({createdAt:-1})
}