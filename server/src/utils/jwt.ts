const jwt = require('jsonwebtoken');

// Create token for this user
const createToken = async (user) => {
  // create token and set to expire in 24 hours
  // GUID generator for private key
  const token = jwt.sign(
    { userId: user._id, user: user },
    process.env.ACCESS_TOKEN_PRIVATE_KEY,
    {
      expiresIn: '24h',
    }
  );
  return token;
};

const verifyToken = async (token) => {
  const decoded = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_PRIVATE_KEY
  );
  return decoded;
};

module.exports = { createToken };
