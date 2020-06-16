const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	try {
		done(null, user.id);
	} catch (err) {
		next(err);
	}
});

passport.deserializeUser((id, done) => {
	try {
		User.findById(id).then((user) => {
			done(null, user);
		});
	} catch (err) {
		next(err);
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
		(accessToken, refreshToken, profile, done) => {
			try {
				User.findOne({ googleId: profile.id }).then((existingUser) => {
					if (existingUser) {
						// we already have a record with the given profile ID
						done(null, existingUser);
					} else {
						//we don't have a user record with this ID, make a new record
						new User({ googleId: profile.id })
							.save()
							.then((user) => done(null, user));
					}
				});
			} catch (err) {
				next(err);
			}
		}
	)
);
