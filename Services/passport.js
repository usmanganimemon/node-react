const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStretegy({
        clientID:keys.googleClientid,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/google/redieract'
    },(request, accessToken, refreshToken, profile, done) => {
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);
    }
    )
);