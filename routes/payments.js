import express from "express";
import {
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
  createPayment,
} from "../controllers/payment.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getPayment);
router.get("/getPay/:paymentId", verifyToken, getPaymentById);

/* UPDATE */
router.put("/updatepayment", verifyToken, updatePayment);

/* DELETE */
router.delete("/delPay/:paymentId", verifyToken, deletePayment);

/* CREATE */
router.post("/newpayment", verifyToken, createPayment);
export default router;
