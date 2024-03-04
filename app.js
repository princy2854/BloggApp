import express from "express";
import mongoose from "mongoose";
import blogRouter from './routes/blog-routes.js';

import router from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter); // Use UserRoutes instead of router

// MongoDB Atlas connection URI
const mongoURI = "mongodb+srv://divyapathak2854:princypathak28541@cluster0.smy1coo.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas: ", error);
  });
