const userProfile = {
    name: 'John Smith',
    email: 'john@example.com',
    goal: 'lose 10 pounds'
}

exports.getUserProfile = (req, res) => {
    res.status(200).json(userProfile);
};

exports.updateUserProfile = (req, res) => {
    const { name, email, goal } = req.body;

    userProfile.name = name;
    userProfile.email = email;
    userProfile.goal = goal;

    res.status(200).json(userProfile);
}