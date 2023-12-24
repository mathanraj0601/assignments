const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db/index");
const jwt = require("jsonwebtoken");

router.post("/signin", async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (user)
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
  // Implement user signup logic
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  await user.save();
  res.send("User Created Sucessfully");
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  console.log(courseId);
  const course = await Course.findOne({ _id: courseId });
  if (!course) res.status(404).send("Course not found");
  await User.findOneAndUpdate(
    {
      username: req.headers.username,
      password: req.headers.password,
    },
    {
      $push: { purchasedCourse: [course] },
    }
  );
  res.status(404).send("Course purchased sucessfully");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  res.json(user.purchasedCourse);
});

module.exports = router;
