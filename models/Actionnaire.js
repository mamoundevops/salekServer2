import mongoose from "mongoose";

const ActionnaireSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    description: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    }, 
    rolle: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Actionnaire = mongoose.model("Actionnaire", ActionnaireSchema);
export default Actionnaire;