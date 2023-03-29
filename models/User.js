import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      min: 2,
      max: 15,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
   
    rolle: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;