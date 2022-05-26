const { DateTime } = require('luxon');

const logger = (req, res, next) => {
  console.log('-----------------------------');
  console.log(DateTime.now().toISO());
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log('-----------------------------');
  next();
};

module.exports = logger;
