const router = require('express').Router();

const { File, Coach, Article, Messages, Courses } = require('../../db/models');

const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');
router.route('/').get(async (req, res) => {
  try {
    const files = await File.findAll({
      where: { id: req.session.user.id },
      include: [
        { model: Coach },
        { model: Article },
        { model: Messages },
        { model: Courses },
      ],
    });

    res.status(200).json({ files });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { image } = req.files;

    const arrImg = await Promise.all(
      image.map(async (el) => await fileuploadMiddeleware(el))
    );

    const serviceAdd = await File.create({
      fileUrl: arrImg[0],
      id: req.session.user.id,
    });

    res.status(201).json(serviceAdd);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/urlFoto', async (req, res) => {
  try {
    const file = req.files?.homesImg;

    const arrImg = await Promise.all(
      file.map(async (el) => await fileuploadMiddeleware(el))
    );
    res.status(200).json(arrImg);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
