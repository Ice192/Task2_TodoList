import mongoose, {Schema, Document} from "mongoose";

export interface ITodoDocument extends Document {
    text: string,
    completed: boolean,
    user: mongoose.Types.ObjectId //MongoDB pakai ObjectId, bukan string biasa
}

const todoSchema = new Schema<ITodoDocument>({
    text: {type: String, required: true}, //Text wajib diisi
    completed: {type: Boolean, default: false}, //otomatis completed: false
    user: {
        type: mongoose.Schema.Types.ObjectId, //tipe field yang digunakan di database
        ref: "User", //untuk mengambil data dari user
        required: true 
    },
},
    {timestamps: true} //monggo DB otomatis tambah createdAt & updateAt
)

export const Todo = mongoose.model<ITodoDocument>("Todo", todoSchema) //Agar bisa CRUD 
