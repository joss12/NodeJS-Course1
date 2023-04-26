
    const express = require("express");
    const crypto = require("crypto");
    const Worker = require('worker-threads').Worker;
    const app = express();


  app.get("/", (req, res) => {
    const worker = new Worker(function(){
      this.onmessage = function(){
        let counter = 0;
        while(counter < 1e9){
          counter++;
        }
        postMessage(counter);
      }
    });

    worker.onmessage = function(message){
      console.log(message.data)
    }
    worker.postMessage('' + message.data);
  });

  

  app.get("/fast", (req, res) => {
    res.send("This run fast!");
  });

  app.listen(3000);



