const router = require('express').Router();
const { Coach } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const coach = await Coach.findAll({
      order: [['id', 'DESC']],
    });

    res.status(200).json(coach);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
