const passport = require('passport');

try {
	module.exports = (app) => {
		// authenticate
		app.get(
			'/auth/google',
			passport.authenticate('google', {
				scope: ['profile', 'email']
			})
		);

		// redirect back to server
		app.get('/auth/google/callback', passport.authenticate('google'));

		app.get('/api/logout', (req, res) => {
			req.logout();
			res.send(req.user);
		});

		app.get('/api/current_user', (req, res) => {
			res.send(req.user);
		});
	};
} catch (err) {
	next(err);
}
