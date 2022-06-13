// passport.use - to inform passport there's a specific rule to authenticate the user
// New Google strategy creates a new instance of the Google passport strategy
// Client ID (public token):
// Client Secret (private token):
const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// done is a callback that we have to call after we have done some work of nudging passport along.
// Take a user model and generate some unique identifying piece of information from it. And then passport will eventually stuff that into a cookie.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Pull the cookie back out and turn it back into a user at some point in the future
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id}).then((existingUser) => {
          if (existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID< make a new record
            new User({ googleId: profile.id})
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
);
