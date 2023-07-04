const router = require('express').Router();

const authApiRouter = require('./api/auth.routes');
const coursesRouter = require('./api/course.routes');
const photoRouter = require('./api/photo.routes');
const messagesRouter = require('./api/message.routes');
const articleRouter = require('./api/article.routes');
const rewiewRouter = require("./api/rewiew.routes")

router.use('/api/photo', photoRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/courses', coursesRouter);
router.use('/api/messages', messagesRouter);
router.use('/api/articles', articleRouter);
router.use('/api/reviews', rewiewRouter);

module.exports = router;
