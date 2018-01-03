'use strict';

module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, amp-*, amp-projectkey');
  if (req.method === 'OPTIONS') {
    res.send(200);
    return;
  }
  next();
};
