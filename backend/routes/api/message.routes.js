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

router.post('/', async (req, res) => {
  try {
    const { messageImg, messageName, messageText } = req.body;

    const message = await Message.create({
      messageImg,
      messageName,
      messageText,
    });

    res.json(message);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:messageId', async (req, res) => {
  try {
    const { messageId } = req.params;
    const result = await Message.destroy({ where: { id: messageId } });
    if (result > 0) {
      res.json(messageId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
