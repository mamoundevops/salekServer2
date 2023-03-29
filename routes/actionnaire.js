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
router.get("/:ActionnaireId", verifyToken, getActionnaireById);

/* UPDATE */
router.put("/ActionnaireId", verifyToken, updateActionnaire);

/* DELETE */
router.delete("/:ActionnaireId", verifyToken, deleteActionnaire);

/* CREATE */
router.post("/newactionnaire", verifyToken, createActionnaire);

export default router;
