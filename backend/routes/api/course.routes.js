const Course = require('../../db/models/course');

const router = require('express').Routes();

router.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.findAll({
      where: { id: course.id },
      include: { model: Course_File },
    });

    res.json({ courses });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
