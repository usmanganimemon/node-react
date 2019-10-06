const express = require('express'); 
const passport = require('passport');
const GoogleStretegy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();
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
app.get('/', (req, res) => {
    res.send({message: 'Hi Usman'});
});
app.get('/login/google', passport.authenticate('google',{
    scope:['profile','email']
}));
app.get('/google/redieract', passport.authenticate('google'))
// Client Id: 254402911625-klt7t2u8j7a772dv3acuglb644s13cak.apps.googleusercontent.com
// Client Secret: m1IKIyIIj9nbe5Kdpq3W8qL9
//http://localhost:5000/google/redieract	
app.listen(process.env.PORT || 5000);