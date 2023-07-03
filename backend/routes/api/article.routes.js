const router = require('express').Router();
const { Article } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const article = await Article.findAll({});
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

router.post('/', async (req, res) => {
  try {
    const { articleImg, articleName, articleText } = req.body;

    const article = await Article.create({
      articleImg,
      articleName,
      articleText,
    });

    res.json(article);
  } catch ({ message }) {
    res.json({ message });
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

module.exports = router;
