// console.log("working");
require("dotenv").config();
let mongoose = require("mongoose");
const app = require("./app");
let port = 3002;
let mongourl = process.env.mongo;

//CLUSTER
const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  console.log("if condition");
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log("else if condition");

  mongoose.connect(mongourl).then(() => {
    console.log("DB connected");
  });
  app.listen(port, () => {
    console.log(`Server is up at ${port} `);
  });
}
