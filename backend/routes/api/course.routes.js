const { Course } = require('../../db/models');

const router = require('express').Router();

router.get('/api/courses', async (req, res) => {
  try {
    const { course_id } = req.params;
    const courses = await Course.findAll({
      where: { course_id: course_id },
    });

    res.json({ courses });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
