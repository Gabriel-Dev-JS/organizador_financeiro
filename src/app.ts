import "dotenv/config";
import express from "express";
import Login from "./controller/login"

//@ts-ignore
import authMiddleware from "../src/middleware/authMiddleware"
// import authRoutes from "../src/routes/auth.routes.js"

const app = express();
app.use(express.json());

app.post("/login",  Login.login);
// app.post("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

export default app;