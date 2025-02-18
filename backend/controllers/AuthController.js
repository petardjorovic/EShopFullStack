const VisitorModel = require("../models/VisitorModel");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  const nameRegex = /^[A-Z][A-Za-z-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^\S{5,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Not valid email" });
  }

  if (!passwordRegex.test(password) || !passwordRegex.test(confirmPassword)) {
    return res
      .status(400)
      .json({ error: "Password must contain at least 5 characters." });
  }
  if (password.trim() !== confirmPassword.trim()) {
    return res.status(400).json({ error: "Password don't match" });
  }

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    return res.status(400).json({
      error:
        "First and last name must start with capital letter and contain at least 2 letters",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await new VisitorModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash,
    });
    let savedUser = await newUser.save();
    res.send("Successufull registration");
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res, next) => {
  const user = req.body;
  console.log(user);
  try {
    res.send("login");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  register,
  login,
};
