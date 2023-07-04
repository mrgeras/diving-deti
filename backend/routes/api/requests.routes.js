const router = require('express').Router();
const { Request } = require('../../db/models');

router.get('/requests', async (req, res) => {
  try {
    const requests = await Request.findAll({});

    res.json(requests);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/requests', async (req, res) => {
  try {
    const { courseId, userName, tel, email } = req.body;

    const request = await Request.create({
      courseId,
      requestStatus: false,
      userName,
      tel,
      email,
    });

    res.json(request);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
