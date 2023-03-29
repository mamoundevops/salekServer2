import express from "express";
import { login, register, forgetpwd, changepwd } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/forgetpwd", forgetpwd);
router.post("/changepwd", changepwd);

export default router;
