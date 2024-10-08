const knex = require('../db');

exports.getUserProfile = async (req, res) => {
    try{
        const userId = req.params.id;
        const user = await knex('users').where({ id: userId }).first();
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateUserProfile = async (req, res) => {
    try{
        const userId = req.params.id;
        const { name, email, goal } = req.body;
        const updatedUser = await knex('users')
            .where({ id: userId })
            .update({ name, email, goal });
        if(updatedUser === 0){
            return res.status(404).json({ message: 'User not found '});
        }
        res.status(200).json({ message: 'User update successfully' });
    } catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.addUser = async (req, res) => {
    const { name, email, goal } = req.body;

    try{
        const newUser = await knex('users').insert({ name, email, goal });
        res.status(201).json({ message: 'User added succesfully', userId: newUser[0] })
    } catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}