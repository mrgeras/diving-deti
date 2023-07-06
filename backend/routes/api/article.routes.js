const router = require('express').Router();
const { Article } = require('../../db/models');
const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');

router.get('/', async (req, res) => {
  try {
    const article = await Article.findAll({
      order: [['id', 'DESC']]
    });
    // console.log(course)

    res.json(article);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.get('/:articleId', async (req, res) => {
  try {
    const article = await Article.findOne({
      raw: true,
      where: { id: req.params.articleId },
    });
    // console.log(article)

    res.json(article);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.delete('/:articleId', async (req, res) => {
  try {
    const { articleId } = req.params;
    const result = await Article.destroy({ where: { id: articleId } });
    if (result > 0) {
      res.json(articleId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
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
    const articleFile = await Article.create({
      articleImg: URL,
      articleName: name,
      articleText: text,
    });
    console.log(name, text);

    file.mv(`./public/img/${fileName}`, (error) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.json(articleFile)
    });
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = router;
