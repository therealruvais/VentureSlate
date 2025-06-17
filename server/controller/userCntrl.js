const User = require("../model/User");

const createUser = async (req, res) => {
  try {
    const { name, email, contact, agreedToTerms } = req.body;
     console.log("Request Body:", req.body);
    // Basic validation
    if (!name || !email || agreedToTerms !== true) {
      return res
        .status(400)
        .json({
          message: "Please fill all required fields and agree to the terms.",
        });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    }

    // Create and save user
    const newUser = new User({
      name,
      email,
      contact,
      agreedToTerms,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createUser };
