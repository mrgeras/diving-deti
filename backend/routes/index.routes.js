const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');
const photoRouter = require('./api/photo.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);
router.use('/api/photo', photoRouter);

module.exports = router;
