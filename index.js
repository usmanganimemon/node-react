const express = require('express'); 

const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
app.use(
    cookieSession({
        maxAge: 30*24*60*60*100,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
require('./Models/User');
require('./Services/passport');
app.use(require('./routes/route')); 
mongoose.connect(keys.mongoUri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })


// Client Id: 254402911625-klt7t2u8j7a772dv3acuglb644s13cak.apps.googleusercontent.com
// Client Secret: m1IKIyIIj9nbe5Kdpq3W8qL9
//http://localhost:5000/google/redieract	
app.listen(process.env.PORT || 5000);

// mongodb+srv://usman_1994:khhTL8toWuLy54jv@cluster0-41gbw.mongodb.net/test?retryWrites=true&w=majority

// https://stark-hollows-83009.herokuapp.com/ | https://git.heroku.com/stark-hollows-83009.git