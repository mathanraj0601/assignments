const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");

router.post("/signin", async (req, res) => {
  const admin = await Admin.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (admin)
    res.send(
      jwt.sign(
        {
          username: req.headers.username,
          password: req.headers.password,
        },
        "jwttoken"
      )
    );
  else return res.status(400).send("Not a Valid Admin");
  // Implemen
});

router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  await Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json("Admin Created Sucessfully");
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });
  res.json(" Course created Sucessfully");
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json(courses);
});

module.exports = router;
