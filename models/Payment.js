import mongoose from "mongoose";
//the payment is according to the client id
const PaymentSchema = new mongoose.Schema(
  {
    clientId: String,
    paymentInfo: [
        {
            date: String,
            agentID: String,
            montant: String,
          },
    ]
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
