import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      rolle,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: passwordHash,
      rolle,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* forgetPassword */
export const forgetpwd = async (req, res) => {
    try {
        // use function findonandupdate
        // const {
        //   id,
        //   password,
        // } = req.body;
    
        // const salt = await bcrypt.genSalt();
        // const passwordHash = await bcrypt.hash(password, salt);
    
        // const updatedUser = new User({
        //   ,
        //   username,
        //   password: passwordHash,
        //   rolle,
        // });
        // const savedUser = await newUser.save();
        // res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };
  
/* changepassword */
export const changepwd = async (req, res) => {
    try {
        // use function findonandupdate
        // const {
        //   id,
        //   password,
        // } = req.body;
    
        // const salt = await bcrypt.genSalt();
        // const passwordHash = await bcrypt.hash(password, salt);
    
        // const updatedUser = new User({
        //   ,
        //   username,
        //   password: passwordHash,
        //   rolle,
        // });
        // const savedUser = await newUser.save();
        // res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  };