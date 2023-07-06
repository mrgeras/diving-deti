const router = require('express').Router();
const { Request, Course } = require('../../db/models');

router.get('/requests', async (req, res) => {
  try {
    const requests = await Request.findAll({
      include: [{ model: Course }],
    });

    res.status(200).json(requests);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/requests/true', async (req, res) => {
  try {
    const requests2 = await Request.findAll({
      where: {
        requestStatus: true,
      },
      include: [{ model: Course }],
    });

    res.status(200).json(requests2);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.post('/requests', async (req, res) => {
  try {
    const { courseId, requestStatus, userName, tel, email } = req.body;

    const request = await Request.create({
      courseId,
      requestStatus,
      userName,
      tel,
      email,
    });


    if (request) {
      res.status(200).json({
        message: 'Ваша заявка отправлена',
        data: request,
      });
    } else {

      res.status(400).json({
        message: 'Ошибка отправки заявки, попробуйте еще раз',
      });
    }
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.put('/requests/:requestId', async (req, res) => {
  try {
    const { requestStatus } = req.body;

    const request = await Request.findOne({
      where: { id: req.params.requestId },
    });
    request.requestStatus = requestStatus;

    request.save();

    res.status(200).json(request);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
