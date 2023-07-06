const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');
const photoRouter = require('./api/photo.routes');
const messagesRouter = require('./api/message.routes');
const articleRouter = require('./api/article.routes');
const requestsRouter = require('./api/requests.routes');
const rewiewRouter = require('./api/rewiew.routes');
const aboutRouter = require('./api/coach.routes');

router.use('/api/photo', photoRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);
router.use('/api/messages', messagesRouter);
router.use('/api/articles', articleRouter);
router.use('/api/admin', requestsRouter);
router.use('/api/reviews', rewiewRouter);
router.use('/api/about', aboutRouter);

module.exports = router;
