const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		function(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }),
				(err, existingUser) => {
					if (err) {
						console.log(
							'Error!! trying to find user with googleId'
						);
						console.log(err);
						return done(null, false);
					}
					// if there is already someone with that googleId
					if (existingUser) {
						return done(null, existingUser);
					} else {
						// if no user in our db, create a new user with that googleId
						// save this user
						new User({ googleId: profile.id }).save(
							(err, savedUser) => {
								if (err) {
									console.log(
										'Error!! saving the new google user'
									);
									console.log(err);
									return done(null, false);
								} else {
									return done(null, savedUser);
								}
							}
						); // closes newGoogleUser.save
					}
				};
		}
	)
);
