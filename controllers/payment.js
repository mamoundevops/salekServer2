import Payment from "../models/Payment.js";

/* CREATE PAYMENT*/
export const createPayment = async (req, res) => {
  try {
    const { clientId, date, agentID, montant } = req.body;
    await Payment.find(
      { clientId: clientId },
      { $push: { date, agentID, montant } }
    );
    res.status(201).json("the payment added successfully");
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ ALL PAYMENT */
export const getPayment = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/* GET PAYMENT BY CLIENTID */
export const getPaymentById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const payment = await Payment.find({ clientID : clientId });
    res.status(200).json(payment);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE A PAYMENT*/
export const updatePayment = async (req, res) => {
  try {
    const { id, clientId, date, agentID, montant } = req.body;
    await Payment.updateOne(
      { _id: id },
      {
        $set: {
          clientID: clientId,
          date: date,
          agentID: agentID,
          montant: montant,
        },
      }
    );
    res.status(200).json("the payment was updated successfuly");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/*  DELETE PAYMENT */
export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await Payment.deleteOne({ _id: id });
    res.status(200).json("successfull detetion");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
