const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = User.findById(id);

		if (user) {
			return done(null, user);
		}
	} catch (e) {
		console.log(e);
	}
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const existingUser = await User.findOne({
					googleId: profile.id
				});
				//.then((existingUser) => {
				if (existingUser) {
					// we already have a record with the given profile ID
					return done(null, existingUser);
				} else {
					//we don't have a user record with this ID, make a new record
					const user = new User({ googleId: profile.id }).save();
					return done(null, user);
				}
				//})
				// .catch((err) => {
				// 	console.log(err);
				// });
			} catch (e) {
				console.log(e);
			}
		}
	)
);
