const jwt = require("jsonwebtoken");
const { User } = require("../db");

function userMiddleware(req, res, next) {
  try {
    const decoded = jwt.verify(req.headers.authorization, "jwttoken");
    const user = User.findOne({
      username: decoded.username,
      password: decoded.password,
    });
    req.body.username = decoded.username;
    req.body.password = decoded.password;
    if (user) next();
    else return res.status(403).send("Not a authorized User");
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
