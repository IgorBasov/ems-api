const express = require('express');
const Promise = require('bluebird');
const validator = require('validator');

const router = express.Router();

router.post('/signin', (req, res, next) => {
  return Promise.try(() => {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).json({
        success: 0,
        data: {
          message: 'Логин(email) и/или пароль обязательны',
          code: 'requiredCredentials'
        }
      });
    }
    if (!validator.isEmail(login)) {
      return res.status(400).json({
        success: 0,
        data: {
          message: 'Логин(email) не соответствует формату',
          code: 'badCredentials'
        }
      });
    }
    res.json({
      success: 1,
      data: { token: 'token' }
    });
  })
    .then(() => next())
    .catch(next);
});

router.post('/signout', (req, res, next) => {
  return Promise.try(() => {
    res.json({
      success: 1,
      data: {}
    });
  })
    .then(() => next())
    .catch(next);
});

router.get('/whoami', (req, res, next) => {
  return Promise.try(() => {
    res.json({
      success: 1,
      data: {}
    });
  })
    .then(() => next())
    .catch(next);
});

module.exports = router;
