require("dotenv").config(); //Create Express server
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Connect to MongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/MoviApp", { useNewUrlParser: true })
    .then(() => {
        server.use(function (req, res, next) {
            //res.header("Access-Control-Allow-Origin", "*");
            const allowedOrigins = [
              "http://localhost:3000" 
            ];
            const origin = req.headers.origin;
            if (allowedOrigins.includes(origin)) {
              res.setHeader("Access-Control-Allow-Origin", origin);
            }
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            res.header("Access-Control-Allow-credentials", true);
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
            next();
          });
          server.use(cors());
          server.use(
  cors({
    origin: "*"
  })
);server.use(cookieParser());
        server.use(express.json());
        server.use("/", routes); // new
        server.listen(3000, () => {
            console.log("Server has started!");
        });
    });
 





