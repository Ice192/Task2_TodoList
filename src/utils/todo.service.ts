
import { Todo } from "../models/todo.models";

export const createTodo = async (text: string, userId: string) => {
    return await Todo.create({
        text,
        user: userId,
    })
}