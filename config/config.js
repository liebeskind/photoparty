var _ = require('underscore');

mongodb:@paulo.mongohq.com:10054/app20227552

module.exports = _.extend(
    require(__dirname + '/../config/env/all.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {});
