const moment = require("moment");
const logger = (req, res, next) => {
    console.log(`${req.method}:// ${req.get('host')}${req.originalUrl}:  ${moment().format()}`);
    next();
};
// EXPORT LOGGER
module.exports = logger;