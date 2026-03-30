import express from "express";
import userRoutes from "./routes/user.route";
import todoRoutes from "./routes/todo.route";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

export default app;
