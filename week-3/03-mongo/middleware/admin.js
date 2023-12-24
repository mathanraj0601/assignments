// Middleware for handling auth
const { Admin } = require("../db/index");
async function adminMiddleware(req, res, next) {
  const admin = await Admin.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (admin) next();
  else return res.status(400).send("Not a Valid Admin");
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
