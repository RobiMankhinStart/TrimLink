const UserSchema = require("../models/UserSchema");
const { GenerateRanTok } = require("../utils/Token");
const { isValidEmail, isValidPass } = require("../utils/Validate");

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name) return res.status(400).send({ message: "name is required" });
    if (!email) return res.status(400).send({ message: "email is required" });
    if (!isValidEmail(email))
      return res.status(400).send({ message: "Invalid email" });
    if (!password)
      return res.status(400).send({ message: "password is required" });
    const existUser = await UserSchema.findOne({ email });
    if (existUser)
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    if (!isValidPass(password))
      return res.status(400).send({ message: "Invalid password" });
    const user = new UserSchema({ name, email, password });
    await user.save();
    return res.status(200).send({ message: "Registration successfull" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// login...............
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("headers", req.headers);
  try {
    if (!email) return res.status(400).send({ message: "email is required" });
    if (!password)
      return res.status(400).send({ message: "password is required" });
    if (!isValidEmail(email))
      return res.status(400).send({ message: "Invalid email" });

    const existUser = await UserSchema.findOne({ email });
    if (!existUser)
      return res
        .status(400)
        .send({ message: "This user doesen't exist. Please Register first" });
    const passCHeck = await existUser.comparePassword(password);
    if (!passCHeck)
      return res.status(400).send({ message: "Password do not match" });

    var token = GenerateRanTok({ id: existUser._id, email: existUser.email });
    console.log("token", token);
    res.cookie("acc_tok", token);
    return res.status(200).send({
      message: "Login Successfull",
      acc_token: token,
      user: {
        id: existUser._id,
        name: existUser.name,
        email: existUser.email,
      },
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

// logOut ............
const logout = async (req, res) => {
  try {
    // This tells the browser to delete the cookie named "acc_tok"
    res.clearCookie("acc_tok");

    return res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = req.user;
    const userData = await UserSchema.findById(user.id).select(
      "-password -__v",
    );
    if (!userData)
      return res.status(401).send({ message: "user profile not found" });
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = { Register, login, getProfile, logout };
