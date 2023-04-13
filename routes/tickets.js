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
router.get("/getTick/:ticketid", verifyToken, getTicketById);

// between tow date 
// router.get("/ticketBetween", verifyToken, getTicketBetween);

// ticket of a year

//ticket by client id 
router.get("/cliTick/:ticketbyclientid", verifyToken,  getTicketByClientId);

/* UPDATE */
router.put("/updTick/:ticketid", verifyToken, updateTicket);

/* DELETE */
router.delete("/delTick/:ticketid", verifyToken, deleteTicket);

/* CREATE */
router.post("/newticket", verifyToken, createTicket);

export default router;
