const router = require('express').Router();
const { Course } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const course = await Course.findAll({});
    console.log(course);

    res.json(course);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
