import Express from "express";
import { loginUser, signupUser } from "../Controller/UserController.js";
const router = Express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

export default router;
