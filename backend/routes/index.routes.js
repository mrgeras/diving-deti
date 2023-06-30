const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);

module.exports = router;
