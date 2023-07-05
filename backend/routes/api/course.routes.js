const router = require('express').Router();
const { Course } = require('../../db/models');
const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');

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
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('Нет фала для загрузки');
    }
    const { file } = req.files;
    const { name, text } = req.body;
    const fileName = file.name.split(' ')[0];
    const URL = await fileuploadMiddeleware(file);
    const courseFile = await Course.create({
      courseImg: URL,
      courseName: name,
      description: text,
    });
    console.log(name, text);

    file.mv(`./public/img/${fileName}`, (error) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.json(courseFile);
    });
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
