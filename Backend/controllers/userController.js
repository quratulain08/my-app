
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { name, email, pasZsword } = req.body;

    try {
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, "1234567890987654321", {
            expiresIn: '1d',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser };
