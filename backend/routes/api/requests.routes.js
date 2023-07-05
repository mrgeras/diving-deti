const router = require('express').Router();
const { Request, Course } = require('../../db/models');

router.get('/requests', async (req, res) => {
  try {
    const requests = await Request.findAll({ include: [{ model: Course }] });

    console.log(requests[0].Course);

    res.json(requests);
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
