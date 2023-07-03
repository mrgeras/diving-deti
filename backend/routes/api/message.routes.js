const router = require('express').Router();
const { Message } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const message = await Message.findAll({});
    // console.log(message)

    res.json(message);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

router.get('/:messageId', async (req, res) => {
  try {
    const message = await Message.findOne({
      raw: true,
      where: { id: req.params.messageId },
    });
    // console.log(message)

    res.json(message);
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
});

module.exports = router;
