import User from "../models/UserModels.js";
import jwt from "jsonwebtoken";

export const SECRET = "djsvbdfadbvaldbvlabgabvakbkvjsbvsjkbvsd";
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, {
    expiresIn: "3d",
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};