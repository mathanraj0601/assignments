// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  try {
    const decoded = jwt.verify(req.headers.authorization, "jwttoken");
    const admin = await Admin.findOne({
      username: decoded.username,
      password: decoded.password,
    });
    if (admin) next();
    else return res.status(403).send("Not a authorized admin");
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
