const express = require('express');
const config = require('../config').server;

const router = express.Router();

router.get('/', (req, res) => {
  // TODO: remove it
  console.log('Server: GET /health', req.query);
  if (
    !req.query ||
    !req.query.token ||
    req.query.token !== config.HEALTH_TOKEN
  ) {
    return res
      .status(401)
      .json({ sucess: 0, data: { message: 'unauthorized' } });
  }
  res.status(200).json({
    success: 1,
    data: { message: 'healthy' }
  });
});

module.exports = router;
