const router = require('express').Router();
const { Information } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const information = await Information.findAll({});
    // console.log(information)

    res.json(information);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.get('/:informationId', async (req, res) => {
  try {
    const information = await Information.findOne({
      raw: true,
      where: { id: req.params.informationId },
    });
    // console.log(information)

    res.json(information);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
