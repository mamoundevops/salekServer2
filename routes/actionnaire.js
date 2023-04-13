import express from "express";
import {
  getActionnaire,
  getActionnaireById,
  updateActionnaire,
  deleteActionnaire,
  createActionnaire,
} from "../controllers/actionnaire.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getActionnaire);
router.get("/getAct/:ActToGetId", verifyToken, getActionnaireById);

/* UPDATE */
router.put("/updateAct", verifyToken, updateActionnaire);

/* DELETE */
router.delete("/delAct/:ActToDelId", verifyToken, deleteActionnaire);

/* CREATE */
router.post("/newAct", verifyToken, createActionnaire);

export default router;
