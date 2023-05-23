const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");

route.post("/tokenGenarate", async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) {
      return res.json({
        status: "give userName",
      });
    }
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: user,
      },
      process.env.tokenKey
    );
    res.json({
      status: "sucesess",
      token,
    });
  } catch (error) {
    return res.status(500).json({ errr: error.messege });
  }
});

module.exports = route;
