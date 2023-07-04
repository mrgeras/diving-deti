const router = require('express').Router();
const { Review } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const review = await Review.findAll({});
    res.json(review);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});
module.exports = router;
