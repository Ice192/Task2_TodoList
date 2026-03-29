import { Todo } from "../models/todo.models";

export const createTodo = async (text: string, userId: string) => {
    return await Todo.create({
        text,
        user: userId,
    })
}

export const getTodoByUser = async (userId: string) => {
    return await Todo.find({user: userId}).sort({createdAt: -1})
}

//Menghapus todo berdasarkan id dan user
export const deleteTodo = async (userId: string, todoId: string) => {
    const todo = await Todo.findByIdAndDelete({
        _id: todoId,
        user: userId
    }) //“Ambil todo ini, TAPI hanya kalau dia milik user ini”

    return todo
}

//mengupdate todo
export const updateTodo = async (todoId: string, userId: string, data: {text?: string, completed?: boolean}) => {
    const todo = await Todo.findOne({
        _id: todoId,
        user: userId
    }) //untuk memastikan data yang diupdate itu milik user
       //? berarti update partial atau update boleh sebagian

    if (!todo) return null

    if(data.text !== undefined) {
        todo.text = data.text
    } //kalau gak di cek undefined, data bisa rusak

    if(data.completed !== undefined) {
        todo.completed = data.completed
    }

    return await todo.save() // menyimpan perubahan ke database
}