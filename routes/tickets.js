import express from "express";
import {
  createTicket,
  getTickets,
  getTicketById,
  getTicketByClientId,
  updateTicket,
  deleteTicket

} from "../controllers/tickets.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getTickets);
router.get("/:ticketid", verifyToken, getTicketById);

// between tow date 
// router.get("/ticketBetween", verifyToken, getTicketBetween);

// ticket of a year

//ticket by client id 
router.get("/ticketbyclientid", verifyToken,  getTicketByClientId);

/* UPDATE */
router.put("/:ticketid", verifyToken, updateTicket);

/* DELETE */
router.delete("/:ticketid", verifyToken, deleteTicket);

/* CREATE */
router.post("/newticket", verifyToken, createTicket);

export default router;
