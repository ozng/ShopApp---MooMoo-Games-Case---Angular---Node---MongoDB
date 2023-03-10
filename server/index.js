const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");

const productRoute = require("./routes/product.js");
const userRoute = require("./routes/user.js");
const orderRoute = require("./routes/order.js");

const app = express();

const PORT = process.env.PORT;

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
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

app.listen(PORT || 5000, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
