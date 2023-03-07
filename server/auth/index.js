const router = require('express').Router();
const { User } = require('../db');


router.post('/login', async (req, res, next) => {
  console.log('first')
  try {
    console.log('second')
    res.json({ token: await User.authenticate(req.body) });
  } catch (err) {
    console.log('third')
    next(err);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

router.get('/me', async (req, res, next) => {
  console.log('getting it')
  try {
    console.log('whats up')
    res.json(await User.findByToken(req.headers.authorization));
    console.log('idk')
  } catch (ex) {
    next(ex);
  }
});
module.exports = router;
