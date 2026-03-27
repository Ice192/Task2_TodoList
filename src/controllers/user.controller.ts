import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../utils/user.service";
import { Request, Response } from "express";
import { createUser } from "../utils/user.service";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await createUser({
            name,
            email,
            password: hashPassword
        })
        res.json(user)
    } catch (error) {
         console.error(error);
        res.status(500).json({message: "Error creating user"})
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body

        const user = await findUserByEmail(email)

            if(!user) {
            return res.status(400).json({message: "User not Found"})
            }
            // Bandingkan password
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
            return res.status(400).json({message: "Invalid Password"})
            }

            // Generate Token
            const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
            )
            res.json({token})
        }
            catch (error) {
                console.error(error)
                res.status(500).json({
                    message: "Login Error"
                })
            }
}
