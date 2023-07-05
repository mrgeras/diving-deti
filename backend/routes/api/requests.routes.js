const router = require('express').Router();
const { Request, Course } = require('../../db/models');

router.get('/requests', async (req, res) => {
  try {
    const requests = await Request.findAll({
      include: [{ model: Course }],
    });

    res.json(requests);
  } catch ({ message }) {
    res.json({ message });
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

    res.json(requests2);
  } catch ({ message }) {
    res.json({ message });
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

    res.json(request);
  } catch ({ message }) {
    res.json({ message });
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

    res.json(request);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
