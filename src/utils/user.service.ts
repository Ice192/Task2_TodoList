import { User } from "../models/user.models";
import { IUsers } from "../interfaces/user.interfaces";

export const createUser = async (data: IUsers) => {
    return await User.create(data);
}

export const findUserByEmail = async (email: string) => {
    return await User.findOne({email})
}