const jwt = require("jsonwebtoken");
let sirectKey = process.env.tokenKey;

const tokenVarification = (req, res, next) => {
  if (req.headers.auth) {
    const token = req.headers.auth;
    jwt.verify(token, sirectKey, (err, decode) => {
      if (err) {
        return res.status(403).json({
          status: "wrong token given",
        });
      }
      next();
    });
  } else {
    res.json({
      status: "failed!",
      messge: "token missing!!!",
    });
  }
};

module.exports = tokenVarification;
