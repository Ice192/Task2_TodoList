import mongoose, {Schema, Document} from "mongoose";

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string
}

const userSchema = new Schema<UserDocument> (
    {
    name: { type: String, required:true},
    email: { type: String, required:true, unique: true},
    password: {type: String, required:true},
    },
    {timestamps:true} //Tambahin field createdAt & updatedAt otomatis di Mongo DB
)
export const User = mongoose.model<UserDocument>("User", userSchema); //Buat alat bernama User berdasarkan userSchema

//kursor find 1 and find many
//CRUUD
//