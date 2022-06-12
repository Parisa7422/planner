import User from "../models/User.js";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  // Check for empty values
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  // Check for duplicate Email
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  // Create user
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(201).json({
    user: { email: user.email, lastName: user.lastName, name: user.name },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Check for empty values
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  // Check for Credential
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new unAuthenticatedError("Invalid Credentials");
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new unAuthenticatedError("Invalid Credentials");
  }

  // 1) setup the token
  // 2) set password undefiend again
  // 3) send back respone
  const token = user.createJWT();
  user.password = undefined;
  res.status(200).json({ user, token });
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
