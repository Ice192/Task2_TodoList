import mongoose, {Schema, Document} from "mongoose";

export interface ITodoDocument extends Document {
    text: string,
    completed: boolean,
    user: mongoose.Types.ObjectId
}

const todoSchema = new Schema<ITodoDocument>({
    text: {type: String, required: true},
    completed: {type: Boolean, default: false},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},
    {timestamps: true}
)

export const Todo = mongoose.model<ITodoDocument>("Todo", todoSchema)