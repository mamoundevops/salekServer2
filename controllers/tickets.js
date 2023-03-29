import Ticket from "../models/Ticket.js";

/* CREATE TICKET*/
export const createTicket = async (req, res) => {
  try {
    const { clientId, ticketInfo } = req.body;
    // seq,
    // number,
    // al,
    // docnumber,
    // totaldoc,
    // tax,
    // fee,
    // comm,
    // fp,
    // paxName,
    // reloc,
    // trnfd,
    // date,
    // agentid,
    // clientCommission,
    await Ticket.find(
      { clientId: clientId },
      {
        $push: {
          ticketInfo : ticketInfo,
        },
      }
    );
    res.status(201).json("the ticket added successfully");
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ ALL TICKET */
export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/* GET TICKET BY TICKETID */
export const getTicketById = async (req, res) => {
  try {
    const { ticketid } = req.params;
    const ticket = await Payment.findOne({ _id: ticketid });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/* GET TICKET BY CLIENTID */
export const getTicketByClientId = async (req, res) => {
    try {
      const { clientId } = req.params;
      const ticket = await Payment.findOne({ clientId: clientId });
      res.status(200).json(ticket);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  

/* UPDATE A TICKET*/
export const updateTicket = async (req, res) => {
  try {
    const { id,  ticketInfo } = req.body;
    await Ticket.updateOne(
      { _id: id },
      {
        $set: {
         ticketInfo: ticketInfo
        },
      }
    );
    res.status(200).json("the payment was updated successfuly");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/*  DELETE TICKET */
export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.deleteOne({ _id: id });
    res.status(200).json("successfull detetion");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



 
