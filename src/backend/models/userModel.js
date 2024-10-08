const db = require('../db/knex');

const getUserProfile = async (id) => {
    return await db('users').where({ id }).first();
}

const updateUserProfile = async (id, data) => {
    await db('users').where({ id }).update(data);
    return getUserProfile(id);
}

module.exports = {
    getUserProfile,
    updateUserProfile,
};