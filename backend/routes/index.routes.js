const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');
const inrmationsRouter = require('./api/information.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);
router.use('/informations', inrmationsRouter);

module.exports = router;
