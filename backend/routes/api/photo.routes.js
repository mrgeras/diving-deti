const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    let file = `${id}.png`;
    let fileLocation = path.join('./public/img/', file);

    console.log(fileLocation);
    // res.download(fileLocation, file);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
