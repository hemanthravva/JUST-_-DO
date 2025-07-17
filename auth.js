const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// REGISTER (Sign Up)
router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validate input
    if (!email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create and save new user
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser._doc;

    res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// SIGN IN
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Please sign up first' });
    }

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user._doc;

    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;