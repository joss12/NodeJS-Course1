process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but
    // in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // I am a child, i am going to act like a server
    // and do nothing
    const express = require("express");
    const crypto = require("crypto");
    const app = express();

  //   function doWork(duration) {
  //     const start = Date.now();
  //     while (Date.now() - start < duration) {}
  //   }

  app.get("/", (req, res) => {
    // doWork(5000);

    crypto.pbkdf2("a", "b", 1000000, 512, "sha512", () => { 
        res.send("Hi there");
    });
  });

  

  app.get("/fast", (req, res) => {
    res.send("This run fast!");
  });

  app.listen(3000);
}



