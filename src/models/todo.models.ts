import mongoose, {Schema, Document} from "mongoose";

export interface ITodoDocument extends Document {
    text: string,
    completed: boolean,
    user: mongoose.Types.ObjectId
}