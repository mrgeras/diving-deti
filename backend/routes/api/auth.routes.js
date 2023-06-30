const router = require('express').Router();
const { Admin } = require('../../db/models');
const bcrypt = require('bcrypt');

router.post('/authorization', async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await Admin.findOne({ where: { name } });

    let compare = false;

    if (user) {
      compare = await bcrypt.compare(password, user.password);
    }

    if (!user || !compare) {
      res.json({ message: 'Пользователя не существует или пароль неверный' });
      return;
    }

    if (!email || !password) {
      res.json({ message: 'Заполнены не все поля' });
      return;
    }

    req.session.userId = user.id;

    res.json({ message: 'ok' });
  } catch (e) {
    const message = e.message;
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    } else {
      res.clearCookie('user_sid').redirect('/');
    }
  });
});

module.exports = router;
