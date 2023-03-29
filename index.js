import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import actionnaireRoutes from "./routes/actionnaire.js";
import ticketsRoutes from "./routes/tickets.js";
import paymentRoutes from "./routes/payments.js";

// import data 
// import Ticket from "./models/Ticket.js";
// import Actionnaire from "./models/Actionnaire.js";
// import Payment from "./models/Payment.js";
// import { ticket, payment, actionnaire } from "./data/data.js";

/* CONFIGURATIONS */
 
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
 

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/actionnaire", actionnaireRoutes);
app.use("/tickets", ticketsRoutes);
app.use("/payment/", paymentRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // Actionnaire.insertMany(actionnaire);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));