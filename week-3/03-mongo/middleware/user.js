const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const user = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (user) next();
  else return res.status(400).send("Not a Valid User");
  // Implement user auth logic
  // Yo u need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
