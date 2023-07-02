const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');
const informationsRouter = require('./api/information.routes');
const articleRouter = require('./api/article.routes');

router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);
router.use('/api/informations', informationsRouter);
router.use('/api/articles', articleRouter);

module.exports = router;
