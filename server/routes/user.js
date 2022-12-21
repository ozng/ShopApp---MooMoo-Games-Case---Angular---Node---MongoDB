const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../models/Product");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, imageUrl } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      imageUrl: imageUrl,
    });

    const user = await newUser.save();

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "12h",
      }
    );

    user.token = token;

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    !user && res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).send("Wrong Password");

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );

    user.token = token;

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add favorite

router.put("/favorite/:userID", async (req, res) => {
  const userID = req.params.userID;
  const productID = req.body.productID;

  try {
    const user = await User.findById(userID);

    const isInclude = user.favorites.includes(productID);

    if (!isInclude) {
      await user.updateOne({ $push: { favorites: productID } });
      res.status(200).json("This product added to your favorite");
    } else {
      await user.updateOne({ $pull: { favorites: productID } });
      res.status(200).json("This product removed from your favorite");
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong.", error: err.message });
  }
});

// Get User Favorites

router.get("/get_favorite/:userID", async (req, res) => {
  const userID = req.params.userID;

  try {
    const user = await User.findById(userID);

    const userFavoritesProductIDs = user.favorites;

    const userFavorites = [];

    for (let index = 0; index < userFavoritesProductIDs.length; index++) {
      const product = await Product.findById(userFavoritesProductIDs[index]);

      userFavorites.push(product);
    }

    res.status(200).json(userFavorites);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// IsFavorite

router.get("/is_favorite/:userID/:productID", async (req, res) => {
  const userID = req.params.userID;
  const productID = req.params.productID;

  try {
    const user = await User.findById(userID);

    const userFavorites = user.favorites;

    const isFavorite = userFavorites.includes(productID);

    res.status(200).json(isFavorite);
  } catch (error) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
