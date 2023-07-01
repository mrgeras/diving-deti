const router = require('express').Router();
const { Admin } = require('../../db/models');
const bcrypt = require('bcrypt');

router.post('/authorization', async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await Admin.findOne({ where: { login } });

    // let compare = false;

    // if (user) {
    //   compare = await bcrypt.compare(password, user.password);
    // }

    // if (!user || !compare) {
    //   res.json({ message: 'Пользователя не существует или пароль неверный' });
    //   return;
    // }

    // if (!email || !password) {
    //   res.json({ message: 'Заполнены не все поля' });
    //   return;
    // }

    req.session.userId = user.id;

    res.json(user);
  } catch (e) {
    const message = e.message;
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await Admin.findOne({ where: { id: req.session.userId } });
      res.json(user);
      return;
    }
    res.json({ message: 'no' });
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.get('/logout',(req, res) => {
//   req.session.destroy((error) => {
//     if (error) {
//       return res.status(500).json({ message: 'Ошибка при удалении сессии' });
//     } else {
//       res.clearCookie('user_sid').redirect('/');
//     }
//   });
// });

router.get('/logout', (req, res) => {
  req.session.destroy();
  if (!req.session) {
    res.clearCookie('user_sid').redirect('/');
    res.json({ message: 'ok' });
  } else {
    return res.status(500).json({ message: 'Ошибка при удалении сессии' });
  }
});

module.exports = router;
