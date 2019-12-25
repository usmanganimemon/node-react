const express = require('express'); 

const keys = require('./config/keys');
const app = express();
const mongoose = require('mongoose');
require('./Services/passport');
app.use(require('./routes/route')); 
require('./Models/User');
mongoose.connect(keys.mongoUri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })


// Client Id: 254402911625-klt7t2u8j7a772dv3acuglb644s13cak.apps.googleusercontent.com
// Client Secret: m1IKIyIIj9nbe5Kdpq3W8qL9
//http://localhost:5000/google/redieract	
app.listen(process.env.PORT || 5000);

// mongodb+srv://usman_1994:khhTL8toWuLy54jv@cluster0-41gbw.mongodb.net/test?retryWrites=true&w=majority