const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../db');

exports.registerUser = async (req, res) => {
    
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('users').insert({ email, password: hashedPassword });

    res.status(201).send('User registered');

};

exports.loginUser = async (req, res) => {
    
    const { email, password } = req.body;
    const user = await knex('users').where({ email }).first();

    if(user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(400).send('Invalid credentials');
    }
};

exports.getProfile = async (req, res) => {
    const userId = req.user.id;
    const user = await knex('users').where({ id: userId }).first();
    res.json(user);
}