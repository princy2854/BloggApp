// const mongoose = require("mongoose");
import mongoose from "mongoose";

// MongoDB Atlas connection URI
const uri = `mongodb+srv://divyapathak2854:princypathak28541@cluster0.smy1coo.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    // Start your server or perform any other operations once connected
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas: ", error);
  });
