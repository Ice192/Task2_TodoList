import dotenv from "dotenv";
import app from "./App";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000

//Koneksikan ke database
connectDB()

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
