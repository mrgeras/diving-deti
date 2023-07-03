const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    let file = `${id}.png`;
    let fileLocation = path.join('./Public/Img/', file);

    console.log(fileLocation);
    // res.download(fileLocation, file);
    res.json(id);
  } catch (error) {}
});

module.exports = router;
