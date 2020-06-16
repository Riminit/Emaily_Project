if (process.env.NODE_ENV === 'production') {
	// we are in prdouction - return the prod set of keys
	module.exports = require('./prod');
} else {
	// we are in development - return the dev keys!!!
	module.exports = require('./dev');
}
