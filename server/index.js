const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");

const productRoute = require("./routes/product");

const app = express();

const PORT = 8800;

app.use(cors());

dotenv.config();

const MongoURL = process.env.MONGO_URL;

mongoose.connect(
  MongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Mongo DB successfully.");
  }
);

app.use(express.json());
app.use(helmet());

app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
