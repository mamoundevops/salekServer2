import mongoose from "mongoose";
//the payment is according to the client id
const TicketSchema = new mongoose.Schema(
  {
    clientId: String,
    ticketInfo: [
      {
        seq: String,
        al: String,
        docnumber: String,
        totaldoc: String,
        tax: String,
        fee: String,
        comm: String,
        fp: String,
        paxName: String,
        reloc: String,
        trnfd: String,
        date: String,
        agentid: String,
        clientCommission: String,
      },
    ],
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
