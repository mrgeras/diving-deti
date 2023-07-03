const router = require('express').Router();
const { Course } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const course = await Course.findAll({});
    // console.log(course)

    res.json(course);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.get('/:courseId', async (req, res) => {
  try {
    const course = await Course.findOne({
      raw: true,
      where: { id: req.params.courseId },
    });
    // console.log(course)

    res.json(course);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { courseImg, courseName, description } = req.body;

    const course = await Course.create({
      courseImg,
      courseName,
      description,
    });

    res.json(course);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const result = await Course.destroy({ where: { id: courseId } });
    if (result > 0) {
      res.json(courseId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
