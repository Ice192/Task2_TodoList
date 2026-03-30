import { User } from "../models/user.models";
import { IUsers } from "../interfaces/user.interfaces";

export const createUser = async (value: IUsers) => {
    return await User.create(value);
}

export const findUserByEmail = async (email: string) => {
    return await User.findOne({email})
}
