const router = require('express').Router();
const { Message } = require('../../db/models');
const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');

router.get('/', async (req, res) => {
  try {
    const message = await Message.findAll({
      order: [['id', 'DESC']],
    });
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/:messageId', async (req, res) => {
  try {
    const message = await Message.findOne({
      raw: true,
      where: { id: req.params.messageId },
    });
    // console.log(message)

    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('Нет файла для загрузки');
    }
    const { file } = req.files;
    const { name, text, text2 } = req.body;
    const fileName = file.name.split(' ')[0];
    const URL = await fileuploadMiddeleware(file);
    const messageFile = await Message.create({
      messageImg: URL,
      messageName: name,
      messageText: text,
      messageText2: text2,
    });
    // console.log(name, text);

    file.mv(`./public/img/${fileName}`, (error) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.status(200).json(messageFile);
    });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:messageId', async (req, res) => {
  try {
    const { messageId } = req.params;
    const result = await Message.destroy({ where: { id: messageId } });
    if (result > 0) {
      res.status(200).json(messageId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
