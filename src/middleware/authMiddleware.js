const { findUserById } = require('../models/userModel');

const getUser = (req, res, next) => {
  const userId = parseInt(req.headers['user-id']);
  const user = findUserById(userId);

  if (!user) return res.status(401).json({ message: 'User not found' });

  req.user = user;
  next();
};

module.exports = { getUser };
