const express = require("express");
const cros = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cros());

//route
const SpecexApp = require("./routes/SpecxApi");
const TokenReq = require("./routes/TokenReq");
const auth = require("./auth/auth");

app.use("/v1", TokenReq);
app.use("/v1", auth, SpecexApp);

app.get("*", (req, res) => {
  res.status(404).send({ w: "404 not found!" });
});

module.exports = app;
