const express = require("express");
const router = express.Router();
const User =require("../models/user")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require('cookie-parser')

router.post("/signup", async (req, res) => {
    try {
      const hash = bcrypt.hashSync(req.body.password, saltRounds);
      const user = new User({
        ...req.body,
        password: hash,
      });
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).send("Invalid signup");
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (!passwordMatch) {
        return res.status(401).send("Login failed");
      }
      const token = jwt.sign(
        { _id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {
          expiresIn: 3 * 24 * 60 * 60,
        }
      );
  
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      res.status(200).json({ message: "login successful" });
    } catch (err) {
      res.status(400).send("Invalid login");
    }
  });
  module.exports = router;